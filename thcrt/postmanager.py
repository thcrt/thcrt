from markdown2 import markdown


class PostManager:
    def __init__(self, posts_path):
        self.posts = {
            post.stem: markdown(post.read_text()) for post in posts_path.glob("*.md")
        }
