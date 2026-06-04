from rest_framework import serializers
from .models import TeamMember,RequiredDocument


class TeamMemberSerrializer(serializers.ModelSerializer):
    class Meta:
        model=TeamMember
        fields="__all__"

class RequiredDocumentSerializer(serializers.ModelSerializer):
    class Meat:
        model=RequiredDocument
        fields="__all__"