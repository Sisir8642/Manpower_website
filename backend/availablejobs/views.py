from django.shortcuts import render
from .views import *
from .serializers import *
from rest_framework import viewsets
from drf_spectacular.utils import extend_schema


# Create your views here.
@extend_schema(
        tags=["Job Application"],
        request=JobApplicationserializer
        )
class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all().order_by('-applied_at')
    serializer_class = JobApplicationserializer    

@extend_schema(
        tags=["Job Detail"],
        request=JobDetailserializer
        )
class JobDetailViewSet(viewsets.ModelViewSet):
    queryset=JobDetail.objects.all()
    serializer_class=JobDetailserializer