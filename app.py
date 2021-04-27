from server.api import api
from flask import Flask, json, request, jsonify, session, Response, render_template
from flask_cors import CORS
import sys

app = Flask(__name__)
CORS(app, support_credentials=True)

app.register_blueprint(api, url_prefix='/api')


app.debug = False # TODO disable
@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(debug=False, use_reloader=False)
