from dataclasses import dataclass
from datetime import datetime
from typing import Optional

import humanize


@dataclass
class PostMetadata:
    id: int
    date_published: Optional[datetime] = None
    date_updated: Optional[datetime] = None
    title: str = "Untitled post"
    published: bool = True

    @property
    def delta_published(self):
        return humanize.naturaltime(datetime.now() - self.date_published)
    
    @property
    def delta_updated(self):
        return humanize.naturaltime(datetime.now() - self.date_updated)

@dataclass
class Post:
    metadata: PostMetadata
    content: str = ""
