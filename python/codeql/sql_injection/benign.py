from flask import Flask, request
from sqlalchemy import create_engine, text


app = Flask(__name__)
engine = create_engine("sqlite://")


@app.get("/users-safe")
def users_safe():
    with engine.connect() as connection:
        rows = connection.execute(text("select * from users where name = :name"), {"name": request.args["name"]})
        return {"rows": [dict(row) for row in rows]}
