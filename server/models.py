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


class Hotel(db.Model, SerializerMixin):
    __table_name__ = "hotels"

class Flight(db.Model, SerializerMixin):
    __table_name__ = "flights"

class Trip(db.Model, SerializerMixin):
    __table_name__ = "trips"