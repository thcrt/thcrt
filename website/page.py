from random import choice

import flask as f

from .quotes import quotes

page = f.Blueprint('page', __name__, template_folder="templates")


@page.route("/")
def home():
    quote = choice(quotes)
    return f.render_template("home.html", quote=quote)
