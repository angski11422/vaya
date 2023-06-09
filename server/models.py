from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
import os
from flask import current_app

from config import *


# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ('-updated_at', '-created_at', '-trips.user')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    city = db.Column(db.String)
    email = db.Column(db.String, nullable=False)
    birthday = db.Column(db.Date)
    profile_photo = db.Column(db.String)
    fav_destination = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now()) 
    

    trips = db.relationship('Trip', backref='user')

    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError("Must enter a valid email")
        return address
    
    @validates('username')
    def validate_username(self, key, username):
        if 4 <= username <= 18:
            raise ValueError("Username must be between 4 and 18 characters")
        return username
    
    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))


class Hotel(db.Model, SerializerMixin):
    __tablename__ = "hotels"

    serialize_rules = ('-updated_at', '-created_at', '-trips.hotel')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    image = db.Column(db.String)
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

    def calculate_total_price(self):
        hotel = Hotel.query.get(self.hotel_id)
        flight = Flight.query.get(self.flight_id)
        if hotel is None or flight is None:
            return None
        self.total_price = hotel.price + flight.price
        return self.total_price
