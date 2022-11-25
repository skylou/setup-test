from flask import Flask

app = Flask(__name__)

@app.route("/_api/do-stuff")
def do_stuff():
    return "Hello world"