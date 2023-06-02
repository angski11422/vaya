from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

metadata = MetaData(namingconvention={
    "fk": "fk%(tablename)s%(column_0name)s%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)
# Models go here!
class User(db.Model, SerializerMixin):
    __table_name__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    city = db.Column(db.String)


class Hotel(db.Model, SerializerMixin):
    __table_name__ = "hotels"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    price = db.Column(db.Numeric(scale=2))


class Flight(db.Model, SerializerMixin):
    __table_name__ = "flights"

    id = db.Column(db.Integer, primary_key=True)
    departure_city = db.Column(db.String)
    arrival_city = db.Column(db.String)
    departure_day = db.Column(db.DateTime)
    arrival_day = db.Column(db.DateTime)
    price = db.Column(db.Numeric(scale=2))


class Trip(db.Model, SerializerMixin):
    __table_name__ = "trips"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'))
    flight_id = db.Column(db.Integer, db.ForeignKey('flights.id'))
    total_price = db.Column(db.Numeric(scale=2))
    