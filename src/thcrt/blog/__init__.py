from pathlib import Path

import flask as f
import frontmatter

from .posts import Post, PostMetadata


bp = f.Blueprint(
    'blog', __name__,
    static_folder="static", template_folder="templates"
)

posts: dict[int, Post] = {}

for file in Path(bp.root_path).glob("posts/*.html.jinja"):
    metadata, content = frontmatter.parse(file.read_text())
    posts[metadata["id"]] = Post(metadata=PostMetadata(**metadata), content=content)


@bp.route("/")
def index():
    return f.render_template("blog/index.html.jinja", posts=posts.values())

@bp.route("/<int:id>")
def show_post(id: int):
    post = posts[id]
    return f.render_template("blog/post.html.jinja", metadata=post.metadata, content=post.content)