from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import Post

# API 1: 新增資料
@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')
    
    if title:
        new_post = Post()
        new_post.title = title
        new_post.content = content
        new_post.photo = photo
        new_post.location = location
        new_post.save() # 存入資料庫
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response({"res": "parameter: title is None"}, status=status.HTTP_400_BAD_REQUEST)

# API 2: 列出資料 (這是 Lab#3 要求 Page 32 的重點項目)
@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    # 根據第 32 頁重點：一定要使用 JsonResponse 或 Response 回傳 list [cite: 1269]
    return JsonResponse(list(posts), safe=False)