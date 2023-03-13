import flask as f

from .page import page


def create_app():
    app = f.Flask("website")

    app.register_blueprint(page)

    return app
