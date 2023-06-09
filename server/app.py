#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource
from datetime import datetime

# Local imports
from config import *
from models import User, Flight, Hotel, Trip

# Views go here!


class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter(
            User.username == username).first()

        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
        return {}, 401


class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}, 204


class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict()
        else:
            return {}, 401


class Signup(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']
        city = request.get_json()['city']
        name = request.get_json()['name']

        if username and password:
            new_user = User(username=username, city=city, name=name)
            new_user.password_hash = password

            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id

            return new_user.to_dict(), 201
        return {}, 422


class UsersPath(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users, 200


class UserByID(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        return user.to_dict(), 200


class FlightsPath(Resource):
    def get(self):
        flights = [flight.to_dict() for flight in Flight.query.all()]
        return flights, 200

# admin only patch & post & delete
    def post(self):
        try:
            new_flight = Flight(
                departure_day=datetime.strptime(
                    request.get_json()['departure_day'], '%Y/%m/%d %H:%M:%S'),
                arrival_day=datetime.strptime(
                    request.get_json()['arrival_day'], '%Y/%m/%d %H:%M:%S'),
                price=request.get_json()['price'],
                departure_city=request.get_json()['departure_city'],
                arrival_city=request.get_json()['arrival_city']
            )
            db.session.add(new_flight)
            db.session.commit()
            return new_flight.to_dict(), 201
        except Exception as e:
            print(e)
            return {"error": "Unable to create new flight."}, 400


class FlightByID(Resource):
    def get(self, id):
        flight = Flight.query.filter(Flight.id == id).first()
        return flight.to_dict(), 200


class HotelsPath(Resource):
    def get(self):
        hotels = [hotel.to_dict() for hotel in Hotel.query.all()]
        return hotels, 200

# admin only patch & post & delete
    def post(self):
        try:
            new_hotel = Hotel(
                name=request.get_json()['name'],
                city=request.get_json()['city'],
                price=request.get_json()['price']
            )
            db.session.add(new_hotel)
            db.session.commit()
            return new_hotel.to_dict(), 201
        except Exception as e:
            print(e)
            return {"error": "Unable to create new hotel."}, 400


class HotelByID(Resource):
    def get(self, id):
        hotel = Hotel.query.filter(Hotel.id == id).first()
        return hotel.to_dict(), 200


class TripsPath(Resource):
    def get(self):
        trips = [trip.to_dict() for trip in Trip.query.all()]
        return trips, 200

    # def post(self):
    #     try:
    #         new_trip = Trip(
    #             user_id=request.get_json()['user_id']
    #             flight_id=request.get_json()['flight_id']
    #             hotel_id=request.get_json()['hotel_id']
    #             total_price=request.Math???? Flight + Hotel
    #         )
    #     except Exception as e:
    #         print(e)
    #         return {"error": "Unable to create new trip."}, 400


class TripByID(Resource):
    def get(self, id):
        trip = Trip.query.filter(Trip.id == id).first()
        return trip.to_dict(), 200


api.add_resource(Logout, '/logout')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Signup, '/signup')

api.add_resource(FlightsPath, '/flights')
api.add_resource(FlightByID, '/flights/<int:id>')

api.add_resource(HotelsPath, '/hotels')
api.add_resource(HotelByID, '/hotels/<int:id>')

api.add_resource(TripsPath, '/trips')
api.add_resource(TripByID, '/trips/<int:id>')

api.add_resource(UsersPath, '/users')
api.add_resource(UserByID, '/users/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
