from flask import Flask, request
from sqlalchemy import create_engine, text


app = Flask(__name__)
engine = create_engine("sqlite://")
ALLOWED_COLUMNS = {"name": "name", "email": "email"}


@app.get("/search-safe")
def search_safe():
    column = ALLOWED_COLUMNS.get(request.args.get("field", "name"), "name")
    statement = text(f"select * from users where {column} = :value")
    with engine.connect() as connection:
        return {"rows": [dict(row) for row in connection.execute(statement, {"value": request.args["value"]})]}
