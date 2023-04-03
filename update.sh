#!/bin/sh

cd "$(dirname "$0")" # go to script dir

git pull
sudo cp web_waitress.service /etc/systemd/system
tailwindcss -c tailwind.config.js -o website/static/tailwind.css --minify
sudo systemctl reload caddy
sudo systemctl restart web_waitress
