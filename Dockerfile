# syntax=docker/dockerfile:1.5

FROM python:3.12.0-slim-bookworm AS build-python
  WORKDIR /build
  RUN pip install build
  COPY . .
  RUN python -m build


FROM python:3.12.0-slim-bookworm AS serve
  RUN useradd --create-home --user-group --uid 1000 --home-dir /server server
  RUN apt-get --quiet update \
   && apt-get --quiet upgrade
  USER server
  WORKDIR /server

  COPY --from=build-python /build/dist/*.whl .
  RUN pip install ./*.whl
  CMD python -m thcrt


LABEL org.opencontainers.image.source="https://github.com/thcrt/thcrt"
