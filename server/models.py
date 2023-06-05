from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import *


# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ('-updated_at', '-created_at', '-trips.user')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    city = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    trips = db.relationship('Trip', backref='user')


class Hotel(db.Model, SerializerMixin):
    __tablename__ = "hotels"

    serialize_rules = ('-updated_at', '-created_at', '-trips.hotel')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    price = db.Column(db.Numeric(scale=2))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    trips = db.relationship('Trip', backref='hotel')


class Flight(db.Model, SerializerMixin):
    __tablename__ = "flights"

    serialize_rules = ('-updated_at', '-created_at', '-trips.flight')

    id = db.Column(db.Integer, primary_key=True)
    departure_city = db.Column(db.String)
    arrival_city = db.Column(db.String)
    departure_day = db.Column(db.DateTime)
    arrival_day = db.Column(db.DateTime)
    price = db.Column(db.Numeric(scale=2))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    trips = db.relationship('Trip', backref='flight')


class Trip(db.Model, SerializerMixin):
    __tablename__ = "trips"

    serialize_rules = ('-updated_at', '-created_at',
                       '-flight.trips', '-hotel.trips', '-user.trips')

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'))
    flight_id = db.Column(db.Integer, db.ForeignKey('flights.id'))
    total_price = db.Column(db.Numeric(scale=2))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
