from rest_framework import serializers

from .models import JobApplication,JobDetail


class JobApplicationserializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields ="__all__"

class JobDetailserializer(serializers.ModelSerializer):
    class Meta:
        model=JobDetail
        fields="__all__"