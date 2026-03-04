from django.urls import path
from . import views

urlpatterns = [
    path('', views.myhello, name='myhello'),
]