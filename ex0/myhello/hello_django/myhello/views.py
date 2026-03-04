# views.py
from django.http import HttpResponse

def myhello(request):
    # 讀取網址參數 name，如果沒有就預設為 CGU
    name = request.GET.get('name', 'CGU')
    return HttpResponse(f"Hello {name}")