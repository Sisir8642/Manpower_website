from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import TeamMember
from .serializers import TeamMemberserrializers

# Create your views here.


class TeamMemberViewSet(ModelViewSet):
    queryset=TeamMember.objects.all()
    serializer_class=TeamMemberserrializers