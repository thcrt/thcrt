from pathlib import Path

import flask as f

from .postmanager import PostManager
from .page import page
from .blog import blog_bp


def create_app():
    app = f.Flask("website")

    app.pm = PostManager(Path("./posts"))

    with app.app_context():
        app.register_blueprint(page)
        app.register_blueprint(blog_bp, url_prefix="/blog")

    return app
