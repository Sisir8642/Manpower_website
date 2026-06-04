from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import CertificateCategory,CertificateImage
from .serializers import CertificateCategorySerializer
from drf_spectacular.utils import extend_schema

# Create your views here.
@extend_schema(
        tags=["Certificate"],
        request=CertificateCategory
        )
class CertificateCategoryViewSet(ModelViewSet):
    queryset=CertificateCategory.objects.all()
    serializer_class=CertificateCategorySerializer
