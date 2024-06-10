# videos/serializers.py

from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'name', 'video_url', 'user')
        read_only_fields = ('user',)
