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
        cities = ["Washington D.C.", "Orlando", "New York City", "Las Vegas", "San Diego", "San Francisco", "Miami", "Seattle", "New Orleans", "Honolulu"]
        hotels = ["Waldorf Astoria", "Hard Rock Hotel", "Baccarat Hotel", "Cosmopolitan", "Rancho Valencia", "Four Seasons", "The Setai", "The Thompson", "The Windsor Court", "The Ritz Carlton"]
        #Seed code goes here!
        print("Deleting data...")
        User.query.delete()
        Hotel.query.delete()
        Flight.query.delete()
        Trip.query.delete()


        print("Creating Hotels...")

        hotels = []
        h1 = Hotel(name= "Waldorf Astoria", city= "Washington D.C.", image= "https://costar.brightspotcdn.com/09/8d/0cb94c1a4e66b3fb0df72abd5d21/20220405-lists-conversionstrump.jpg",price=randint(100, 1000))
        h2 = Hotel(name= "Hard Rock Hotel", city= "Orlando", image= "https://d3opdn976v5yna.cloudfront.net/1221620750/cms/cache/1920x1080/fc/1758-fce2561f291f672cef8a10c8b3f546ae.jpg",price=randint(100, 1000))
        h3 = Hotel(name= "Baccarat Hotel", city= "New York City", image= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/e4/4b/fd/baccarat-hotel-residences.jpg?w=700&h=-1&s=1",price=randint(100, 1000))
        h4 = Hotel(name= "Cosmopolitan", city= "Las Vegas", image= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/60/b7/6f/exterior.jpg?w=700&h=-1&s=1" ,price=randint(100, 1000))
        h5 = Hotel(name= "Rancho Valencia", city= "San Diego", image="https://secure.s.forbestravelguide.com/img/properties/rancho-valencia-resort-spa/rancho-valencia-resort-spa-firepits.jpg" ,price=randint(100, 1000))
        h6 = Hotel(name= "Four Seasons", city= "San Francisco", image= "https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/accommodation/north-america/usa/four-seasons-san-francisco-2023/terrace-428.jpg?w=1536&h=1780" ,price=randint(100, 1000))
        h7 = Hotel(name= "The Setai", city= "Miami", image= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/14/03/40/the-setai.jpg?w=700&h=-1&s=1",price=randint(100, 1000))
        h8 = Hotel(name= "The Thompson", city= "Seattle", image= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c2/7e/f3/the-nest.jpg?w=700&h=-1&s=1",price=randint(100, 1000))
        h9 = Hotel(name= "The Windsor Court", city="New Orleans" , image= "https://i0.wp.com/windsorcourthotel.com/wp-content/uploads/2019/03/header-outside.jpg?fit=1920%2C1070&ssl=1",price=randint(100, 1000))
        h10 = Hotel(name= "The Ritz Carlton", city= "Honolulu", image= "https://s7d1.scene7.com/is/image/marriotts7prod/rz-hnlrr-exterior-hero-17020:Wide-Hor?wid=1336&fit=constrain",price=randint(100, 1000))
        hotels.extend([h1, h2, h3, h4, h5, h6, h7, h8, h9, h10])

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
                user_id=randint(1, 10),
                hotel_id=randint(1, 10),
                flight_id=randint(1, 10)
            )
            t.calculate_total_price()
            trips.append(t)
 
        db.session.add_all(trips)


        db.session.commit()
 

        print("Seeding done!")



