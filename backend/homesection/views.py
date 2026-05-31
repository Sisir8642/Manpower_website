from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Slider,SliderImage
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import SliderSerializer,SliderImageSerializer

class SliderViewSet(ModelViewSet):
    queryset = Slider.objects.filter(is_active=True)
    serializer_class = SliderSerializer
    parser_classes = [MultiPartParser, FormParser] 






    

