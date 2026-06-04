from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Slider,SliderImage,WhyUs,WhyUsItem,MessageChairperson,Gallery,News
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import SliderSerializer,SliderImageSerializer,WhyUsSerializer,GallerySerializer,NewsSerializer
from drf_spectacular.utils import extend_schema


@extend_schema(
        tags=["Slider"],
        request=SliderSerializer
        )
class SliderViewSet(ModelViewSet):
    queryset = Slider.objects.filter(is_active=True)
    serializer_class = SliderSerializer
    parser_classes = [MultiPartParser, FormParser] 

# class MessageChairPersonViewSet(ModelViewSet):
#     queryset=MessageChairperson.objects.first()
#     serializer_class=MessageChairpersonserializer
@extend_schema(
        tags=["WHY US"],
        request=WhyUsSerializer
        )
class WhyUSViewSet(ModelViewSet):
    queryset=WhyUs.objects.all()
    serializer_class=WhyUsSerializer

@extend_schema(
        tags=["Gallery"],
        request=GallerySerializer
        )
class GalleryViewSet(ModelViewSet):
    queryset=Gallery.objects.all()
    serializer_class=GallerySerializer



@extend_schema(
        tags=["News"],
        request=NewsSerializer
        )
class NewsViewSet(ModelViewSet):
    queryset=News.objects.all()
    serializer_class=NewsSerializer



    

