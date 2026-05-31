from django.shortcuts import render
from .views import *
from .serializers import *
from rest_framework import viewsets


# Create your views here.
class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all().order_by('-applied_at')
    serializer_class = JobApplicationserializers