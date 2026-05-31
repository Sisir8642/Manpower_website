from rest_framework import serializers

from .models import JobApplication


class JobApplicationserializers(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields ="__all__"