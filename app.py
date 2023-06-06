from flask import Flask
from src.router import configure_routes
from dotenv import load_dotenv
from src.create_database import createTables
from flask_cors import CORS, cross_origin

load_dotenv()
createTables()

app = Flask(__name__)
#CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
CORS(app, origins='http://localhost:3000')

configure_routes(app=app)
if __name__ == '__main__':
    app.run(debug=True)