from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Slider,SliderImage,WhyUs,WhyUsItem,MessageChairperson,Gallery
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import SliderSerializer,SliderImageSerializer,WhyUsSerializer,GallerySerializer

class SliderViewSet(ModelViewSet):
    queryset = Slider.objects.filter(is_active=True)
    serializer_class = SliderSerializer
    parser_classes = [MultiPartParser, FormParser] 

# class MessageChairPersonViewSet(ModelViewSet):
#     queryset=MessageChairperson.objects.first()
#     serializer_class=MessageChairpersonserializer

class WhyUSViewSet(ModelViewSet):
    queryset=WhyUs.objects.all()
    serializer_class=WhyUsSerializer


class GalleryViewSet(ModelViewSet):
    queryset=Gallery.objects.all()
    serializer_class=GallerySerializer



    

