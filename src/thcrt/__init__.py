import flask as f

from .__main__ import main

__all__ = ["create_app", "main"]


def create_app() -> f.Flask:
    app = f.Flask(__name__)

    from .blog import bp as blog
    from .pages import bp as pages

    app.register_blueprint(pages)
    app.register_blueprint(blog, url_prefix="/blog")

    return app
