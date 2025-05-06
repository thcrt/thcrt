from dataclasses import dataclass
from datetime import datetime
from typing import TypedDict

import humanize


class PostMetadataFields(TypedDict):
    id: int
    date_published: datetime | None
    date_updated: datetime | None
    title: str
    published: bool


@dataclass
class PostMetadata:
    id: int
    date_published: datetime | None = None
    date_updated: datetime | None = None
    title: str = "Untitled post"
    published: bool = True

    @property
    def delta_published(self):
        return (
            None
            if self.date_published is None
            else humanize.naturaltime(datetime.now() - self.date_published)
        )

    @property
    def delta_updated(self):
        return (
            None
            if self.date_updated is None
            else humanize.naturaltime(datetime.now() - self.date_updated)
        )


@dataclass
class Post:
    metadata: PostMetadata
    content: str = ""
