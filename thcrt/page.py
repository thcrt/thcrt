from random import sample

import flask as f
from flask import current_app as app

from .quotes import quotes

page = f.Blueprint("page", __name__)


POSTS_ON_HOMEPAGE = 3


@page.route("/")
def home():
    quote = sample(quotes, 1)[0]
    number_of_posts = len(app.pm.posts)
    posts = sample(
        list(app.pm.posts),
        POSTS_ON_HOMEPAGE if number_of_posts >= POSTS_ON_HOMEPAGE else number_of_posts,
    )
    return f.render_template("home.html", quote=quote, posts=posts)
