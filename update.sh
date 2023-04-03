#!/bin/sh

cd "$(dirname "$0")" # go to script dir

git pull
tailwindcss -c tailwind.config.js -o website/static/tailwind.css --minify
sudo systemctl reload caddy
sudo systemctl restart web_waitress
