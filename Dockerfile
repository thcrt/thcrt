# syntax=docker/dockerfile:1.5

FROM node:21.2.0-bookworm-slim AS build-tailwind
  WORKDIR /build
  RUN npm --quiet install tailwindcss @tailwindcss/typography
  COPY thcrt/templates tailwind.config.js ./
  RUN npx --quiet tailwindcss --output build.css --minify


FROM python:3.12.0-slim-bookworm AS build-python
  WORKDIR /build
  RUN pip install build
  COPY . .
  COPY --from=build-tailwind /build/build.css ./thcrt/static
  RUN python -m build


FROM python:3.12.0-slim-bookworm AS serve
  RUN useradd --create-home --user-group --uid 1000 --home-dir /server server
  RUN apt-get --yes --quiet update \
   && apt-get --yes --quiet upgrade
  USER server
  WORKDIR /server

  COPY --from=build-python /build/dist/*.whl .
  RUN pip install ./*.whl
  CMD python -m thcrt


LABEL org.opencontainers.image.source="https://github.com/thcrt/thcrt"
