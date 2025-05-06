from pathlib import Path
from typing import cast

import flask as f
import frontmatter  # type: ignore

from .posts import Post, PostMetadata, PostMetadataFields

bp = f.Blueprint("blog", __name__, static_folder="static", template_folder="templates")

posts: dict[int, Post] = {}

for file in Path(bp.root_path).glob("posts/*.html.jinja"):
    metadata, content = frontmatter.parse(file.read_text())
    metadata = cast("PostMetadataFields", metadata)
    posts[metadata["id"]] = Post(metadata=PostMetadata(**metadata), content=content)


@bp.route("/")
def index():
    return f.render_template("blog/index.html.jinja", posts=posts.values())


@bp.route("/<int:post_id>")
def show_post(post_id: int):
    post = posts[post_id]
    return f.render_template(
        "blog/post.html.jinja",
        metadata=post.metadata,
        content=f.render_template_string(post.content),
    )
