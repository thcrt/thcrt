import flask as f
from .__main__ import main

def create_app() -> f.app:
    app = f.Flask(__name__)

    @app.route("/")
    def index()-> str:
        return f.render_template("index.html.jinja")
    
    from .blog import bp as blog
    app.register_blueprint(blog, url_prefix='/blog')

    return app
