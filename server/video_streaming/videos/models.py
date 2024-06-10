from django.db import models

# Create your models here.
# videos/models.py

from django.db import models
from django.contrib.auth import get_user_model

class Video(models.Model):
    name = models.CharField(max_length=255)
    video_url = models.URLField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.name
