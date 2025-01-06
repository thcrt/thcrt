import flask as f


bp = f.Blueprint('pages', __name__)

@bp.route("/")
def index():
    return f.render_template("index.html.jinja")
