import flask as f
from .__main__ import main

def create_app() -> f.app:
    app = f.Flask(__name__)

    from .pages import bp as pages
    app.register_blueprint(pages)
        
    from .blog import bp as blog
    app.register_blueprint(blog, url_prefix='/blog')

    return app
