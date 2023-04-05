from random import sample

import flask as f
from flask import current_app as app

from .quotes import quotes

page = f.Blueprint('page', __name__, template_folder="templates")


@page.route("/")
def home():
    quote = sample(quotes, 1)[0]
    posts = sample(
        list(app.pm.posts),
        3 if len(app.pm.posts) >= 3 else len(app.pm.posts)
    )
    return f.render_template("home.html", quote=quote, posts=posts)
