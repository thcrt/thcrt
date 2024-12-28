def main():
    from thcrt import create_app
    from waitress import serve
    app = create_app()
    serve(app, host="0.0.0.0", port=8080)

if __name__ == "__main__":
    main()