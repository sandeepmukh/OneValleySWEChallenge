import requests

import enum
from flask import Flask, json, request, jsonify, session, Response, Blueprint
import sys
from flask_cors import CORS, cross_origin


api = Blueprint('api', __name__)

@api.route('/imgs', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_images():
    imgs = requests.get("https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json")
    print(imgs)
    return Response(imgs, status=200)

@api.route('/getFruits', methods=['POST'])
@cross_origin(supports_credentials=True)
def get_fruit():
    fruit_facts = requests.get("https://www.fruityvice.com/api/fruit/"+request.json['name'])
    print(fruit_facts)
    return Response(fruit_facts, status=200)