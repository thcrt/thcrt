import flask as f
from flask import current_app as app

blog_bp = f.Blueprint('blog', __name__, template_folder="templates")


@blog_bp.route("/")
def posts():
    return f.render_template("posts.html", posts=app.pm.posts)
