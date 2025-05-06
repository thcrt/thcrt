def main():
    from waitress import serve

    from thcrt import create_app

    app = create_app()
    serve(app, host="0.0.0.0", port=8080)  # noqa: S104


if __name__ == "__main__":
    main()
