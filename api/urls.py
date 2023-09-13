from django.urls import path
from . import views

urlpatterns = [
    # api/
    path('', views.getData, name='data'),
]