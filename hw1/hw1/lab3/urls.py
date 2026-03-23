# lab3/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # 將 'myhello/' 改為 ''
    path('', include('myhello.urls')), 
]