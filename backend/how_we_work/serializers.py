from rest_framework import serializers
from .models import TeamMember


class TeamMemberserrializers(serializers.ModelSerializer):
    class Meta:
        model=TeamMember
        fileds="__all__"