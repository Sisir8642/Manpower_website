from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import CertificateCategory,CertificateImage
from .serializers import CertificateCategorySerializer

# Create your views here.

class CertificateCategoryViewSet(ModelViewSet):
    queryset=CertificateCategory.objects.all()
    serializer_class=CertificateCategorySerializer