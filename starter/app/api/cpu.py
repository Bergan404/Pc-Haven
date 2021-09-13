from flask import Blueprint, jsonify, session, request
from app.models import db
from pcpartpicker import API


api = API()

cpus = Blueprint('cpu', __name__)


@cpus.route('/')
def main():
    cpu_data = api.retrieve("cpu")
    cpu_strings = cpu_data.query.all()
    return {"cpu": [cpu_string.to_dict() for cpu_string in cpu_strings]}

    print(cpu_data, "37473t634tr674t367t4367ft7346t74")
