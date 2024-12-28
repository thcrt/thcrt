import flask as f
from .__main__ import main

def create_app() -> f.app:
    app = f.Flask(__name__)

    @app.route("/")
    def index()-> str:
        return f.render_template("index.html.jinja")

    return app
