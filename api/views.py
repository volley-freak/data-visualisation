from django.shortcuts import render
from rest_framework.response import Response
from .models import News
from .serializers import NewsSerializer
from rest_framework.decorators import api_view


# Create your views here.

@api_view(['GET'])
def getData(request):
    data = News.objects.all();
    serializer = NewsSerializer(data, many=True)

    return Response(serializer.data)