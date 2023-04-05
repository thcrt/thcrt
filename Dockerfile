FROM node:19-alpine AS tailwind_build
WORKDIR /build
RUN npm install tailwindcss @tailwindcss/typography
COPY website/templates tailwind.config.js ./
RUN npx tailwindcss -o build.css --minify


FROM python:3-alpine AS flask_build
WORKDIR /build
COPY website/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY --from=tailwind_build /build/build.css website/static/tailwind.css
CMD [ "python", "-m", "website" ]
