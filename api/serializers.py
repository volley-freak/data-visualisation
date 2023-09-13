from rest_framework import serializers
from .models import News  # Import your model

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'