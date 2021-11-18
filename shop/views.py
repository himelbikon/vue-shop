from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.views import APIView


class LatestProducts(APIView):
    def get(self, request):
        products = Product.objects.all()[0:12]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
