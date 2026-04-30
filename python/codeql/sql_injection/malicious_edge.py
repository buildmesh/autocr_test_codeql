from flask import Flask, request
from sqlalchemy import create_engine


app = Flask(__name__)
engine = create_engine("sqlite://")


def user_query(column: str, value: str) -> str:
    return f"select * from users where {column} = '{value}'"


@app.get("/search")
def search():
    with engine.connect() as connection:
        return {"rows": list(connection.exec_driver_sql(user_query(request.args["field"], request.args["value"])))}
