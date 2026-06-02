from rest_framework import serializers
from .models import TeamMember


class TeamMemberSerrializers(serializers.ModelSerializer):
    class Meta:
        model=TeamMember
        fields="__all__"