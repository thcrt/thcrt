from importlib.resources import as_file, files
from pathlib import Path

import flask as f

from .blog import blog_bp
from .page import page
from .postmanager import PostManager


def create_app():
    with as_file(files("thcrt")) as data_files:
        app = f.Flask(
            "website",
            template_folder=data_files / "templates",
            static_folder=data_files / "static",
        )
        app.pm = PostManager(data_files / "posts")

    with app.app_context():
        app.register_blueprint(page)
        app.register_blueprint(blog_bp, url_prefix="/blog")

    return app
