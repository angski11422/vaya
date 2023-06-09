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

class Signup(Resource):
    def post(self):
        print(request.get_json())
        username = request.get_json()['username']
        password = request.get_json()['password']
        city = request.get_json()['city']
        name = request.get_json()['full_name']
        email = request.get_json()['email']
        profile_photo = request.get_json()['profile_photo']
        
        if username and password:
            new_user = User(username=username, city=city, name=name, email=email, profile_photo=profile_photo)
            new_user.password_hash = password

            db.session.add(new_user)
            db.session.commit()


            session['user_id'] = new_user.id

            return new_user.to_dict(), 201
        return {}, 422

class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter(
            User.username == username).first()
        print(request.get_json())

        if user.authenticate(password):
            session['user_id'] = user.id
            print(user.id)
            return user.to_dict(), 200
        return None, 401


class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return None, 204


class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            if user:
                return user.to_dict()
            else:
                return None
        else:
            return {"message": "User not logged in"}, 401



class UsersPath(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users, 200


class UserByID(Resource):
    def get(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            return user.to_dict(), 200
        except Exception:
            return {"error": "Unable to find user"}, 404
    
    def patch(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            if user == None:
                return {'error': 'User not found'}, 404
            
            photo_file = request.files['profile_photo']
            if photo_file:
                user.save_profile_photo(photo_file)
                db.session.commit()
            else:
                for attr in request.get_json():
                    setattr(user, attr, request.get_json()[attr])
                db.session.add(user)
                db.session.commit()
                return user.to_dict(), 200
        except Exception:
            return {"error": "Unable to update user."}, 404
    
    def delete(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            db.session.delete(user)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to find user."}, 404


class FlightsPath(Resource):
    def get(self):
        flights = [flight.to_dict() for flight in Flight.query.all()]
        return flights, 200

# admin only post 
    # def post(self):
    #     try:
    #         new_flight = Flight(
    #             departure_day=datetime.strptime(
    #                 request.get_json()['departure_day'], '%Y/%m/%d %H:%M:%S'),
    #             arrival_day=datetime.strptime(
    #                 request.get_json()['arrival_day'], '%Y/%m/%d %H:%M:%S'),
    #             price=request.get_json()['price'],
    #             departure_city=request.get_json()['departure_city'],
    #             arrival_city=request.get_json()['arrival_city']
    #         )
    #         db.session.add(new_flight)
    #         db.session.commit()
    #         return new_flight.to_dict(), 201
    #     except Exception:
    #         return {"error": "Unable to create new flight."}, 400

# admin only patch & delete
class FlightByID(Resource):
    def get(self, id):
        try:
            flight = Flight.query.filter(Flight.id == id).first()
            return flight.to_dict(), 200
        except Exception:
            return {"error": "Unable to find flight"}, 404


class HotelsPath(Resource):
    def get(self):
        hotels = [hotel.to_dict() for hotel in Hotel.query.all()]
        return hotels, 200

# admin only post 
    # def post(self):
    #     try:
    #         new_hotel = Hotel(
    #             name=request.get_json()['name'],
    #             city=request.get_json()['city'],
    #             price=request.get_json()['price']
    #         )
    #         db.session.add(new_hotel)
    #         db.session.commit()
    #         return new_hotel.to_dict(), 201
    #     except Exception:
    #         return {"error": "Unable to create new hotel."}, 400

# admin only patch & delete
class HotelByID(Resource):
    def get(self, id):
        try:
            hotel = Hotel.query.filter(Hotel.id == id).first()
            return hotel.to_dict(), 200
        except Exception:
            return {"error": "Unable to find hotel"}, 404


class TripsPath(Resource):
    def get(self):
        trips = [trip.to_dict() for trip in Trip.query.all()]
        return trips, 200

    def post(self):
        try:
            new_trip = Trip(
                user_id=request.get_json()['user_id'],
                flight_id=request.get_json()['flight_id'],
                hotel_id=request.get_json()['hotel_id']
            )
            new_trip.calculate_total_price()
            db.session.add(new_trip)
            db.session.commit()
            return new_trip.to_dict(), 201
        except Exception:
            return {"error": "Unable to create new trip."}, 400


class TripByID(Resource):
    def get(self, id):
        try:
            trip = Trip.query.filter(Trip.id == id).first()
            return trip.to_dict(), 200
        except Exception:
            return {"error": "Unable to find trip"}, 404
        
    def patch(self, id):
        try:
            trip = Trip.query.filter(Trip.id == id).first()
            if trip == None:
                return {'error': 'Trip not found'}, 404
            else:
                for attr in request.get_json():
                    setattr(trip, attr, request.get_json()[attr])
                trip.calculate_total_price()
                db.session.add(trip)
                db.session.commit()
                return trip.to_dict(), 200
        except Exception:
            return {"error": "Unable to update trip."}, 404

    def delete(self, id):
        try:
            trip = Trip.query.filter(Trip.id == id).first()
            db.session.delete(trip)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to delete trip."}, 404


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
