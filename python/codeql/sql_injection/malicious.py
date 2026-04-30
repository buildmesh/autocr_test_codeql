from flask import Flask, request
from sqlalchemy import create_engine, text


app = Flask(__name__)
engine = create_engine("sqlite://")


@app.get("/users")
def users():
    query = "select * from users where name = '" + request.args["name"] + "'"
    with engine.connect() as connection:
        return {"rows": [dict(row) for row in connection.execute(text(query))]}
