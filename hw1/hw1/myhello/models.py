from django.db import models

# HW1 要求：建立有三個欄位的資料表 
class Course(models.Model):
    Department = models.CharField(max_length=100) # 開課單位 [cite: 815]
    CourseTitle = models.CharField(max_length=100) # 課程名稱 [cite: 815]
    Instructor = models.CharField(max_length=100) # 授課老師 [cite: 815]

    def __str__(self):
        return self.CourseTitle