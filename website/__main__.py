from website import create_app
from waitress import serve

if __name__ == "__main__":
    app = create_app()
    serve(app, host="127.0.0.1", port="8080")
