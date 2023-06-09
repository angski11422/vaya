#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Hotel, Flight, Trip

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        cities = ["Denver", "Boston", "New York City", "Las Vegas", "Los Angeles", "Chicago", "Miami", "Seattle", "Houston", "Dallas"]
        #Seed code goes here!
        print("Deleting data...")
        User.query.delete()
        Hotel.query.delete()
        Flight.query.delete()
        Trip.query.delete()

        print("Creating Users...")
   
        users = []
        for i in range(10):
            u = User(
                name=fake.name(),
                username=fake.user_name(),
                _password_hash=fake.word(),
                city=rc(cities)
            )
            users.append(u)

        db.session.add_all(users)

        print("Creating Hotels...")

        hotels = []
        for i in range(10):
            h = Hotel(
                name=fake.name(),
                city=rc(cities),
                price=randint(100, 1000)
            )
            hotels.append(h)

        db.session.add_all(hotels)

        print("Creating Flights...")

        flights = []
        for i in range(10):
            f = Flight(
                departure_city=rc(cities),
                arrival_city=rc(cities),
                departure_day=fake.date_time(),
                arrival_day=fake.date_time(),
                price=randint(100, 1000)
            )
            flights.append(f)

        db.session.add_all(flights)


        print("Creating Trips...")

        trips = []
        for i in range(10):
            t = Trip(
                total_price=randint(100, 1000),
                user_id=randint(1, 10),
                hotel_id=randint(1, 10),
                flight_id=randint(1, 10)
            )
            trips.append(t)
 
        db.session.add_all(trips)


        db.session.commit()
 

        print("Seeding done!")



