from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import Course  # 修正重點：將 Post 改為 Course 

# ... 前面的 import 略 ...

@api_view(['GET'])
def course_list(request):  # 這裡的名稱必須是 course_list
    # 獲取所有課程資料
    courses = Course.objects.all().values()
    return JsonResponse(list(courses), safe=False)

@api_view(['GET'])
def add_course(request):  # 這裡的名稱必須是 add_course
    dept = request.GET.get('Department', '')
    title = request.GET.get('CourseTitle', '')
    teacher = request.GET.get('Instructor', '')
    
    if dept and title and teacher:
        new_course = Course(Department=dept, CourseTitle=title, Instructor=teacher)
        new_course.save()
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    return Response({"res": "parameter error"}, status=status.HTTP_400_BAD_REQUEST)