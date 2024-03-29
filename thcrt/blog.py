import flask as f
from flask import current_app as app

blog_bp = f.Blueprint("blog", __name__)


@blog_bp.route("/")
def posts():
    return f.render_template("posts.html", posts=app.pm.posts)


@blog_bp.route("/<slug>")
def post(slug):
    return f.render_template(
        "post.html", title=" ".join(slug.split("-")), content=app.pm.posts[slug]
    )
