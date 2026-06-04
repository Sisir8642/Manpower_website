from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import TeamMember,RequiredDocument
from .serializers import TeamMemberSerrializer,RequiredDocumentSerializer

# Create your views here.


class TeamMemberViewSet(ModelViewSet):
    queryset=TeamMember.objects.all()
    serializer_class=TeamMemberSerrializer


class RequiredDocumentViewSet(ModelViewSet):
    queryset=RequiredDocument.objects.all()
    serializer_class=RequiredDocumentSerializer