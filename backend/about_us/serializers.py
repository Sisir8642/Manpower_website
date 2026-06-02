from rest_framework import serializers
from .models import CertificateCategory,CertificateImage


class CertificateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CertificateImage
        fields = ['id', 'image']


class CertificateCategorySerializer(serializers.ModelSerializer):
    images = CertificateImageSerializer(many=True, read_only=True)

    class Meta:
        model = CertificateCategory
        fields = ['id', 'title','images']
