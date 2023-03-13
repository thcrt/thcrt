import flask as f

page = f.Blueprint('page', __name__, template_folder="templates")


@page.route("/")
def home():
    return f.render_template("home.html")
