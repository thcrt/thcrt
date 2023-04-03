import flask as f
from waitress import serve

from .page import page


def create_app():
    app = f.Flask("website")

    app.register_blueprint(page)

    return app


if __name__ == "__main__":
    app = create_app()
    serve(app, host="127.0.0.1", port="8080")
