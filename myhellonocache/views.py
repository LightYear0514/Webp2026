# views.py
import logging # 導入內建模組 [cite: 720]
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# 取得與 settings.py 對應的 logger 名稱 [cite: 723]
logger = logging.getLogger('django')

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name', None)
        
        # 使用 logger.debug 記錄資訊 [cite: 738]
        # 這行會將內容記錄到終端機與 debug.log 檔案中 [cite: 705]
        logger.debug(f"************** myhello_api name: {my_name}")
        
        if my_name:
            return Response({"data": "Hello " + my_name}, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )