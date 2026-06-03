from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'sliders', SliderViewSet, basename='slider'),
router.register(r'why-us',WhyUSViewSet,basename='why-us'),
router.register(r'gallery',GalleryViewSet,basename='gallery')
router.register(r'news',NewsViewSet,basename='news')


urlpatterns = [
    path('', include(router.urls)),
]
