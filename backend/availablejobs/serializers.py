from rest_framework import serializers

from .models import JobApplication,JobDetail


class JobApplicationserializers(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields ="__all__"

class JobDetailserializers(serializers.ModelSerializer):
    class Meta:
        model=JobDetail
        fields="__all__"