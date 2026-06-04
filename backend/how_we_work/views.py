from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import TeamMember,RequiredDocument
from .serializers import TeamMemberSerrializer,RequiredDocumentSerializer
from drf_spectacular.utils import extend_schema


@extend_schema(
        tags=["Team Member"],
        request=TeamMemberSerrializer
        )

class TeamMemberViewSet(ModelViewSet):
    queryset=TeamMember.objects.all()
    serializer_class=TeamMemberSerrializer

@extend_schema(
        tags=[" Document "],
        request=RequiredDocumentSerializer
        )
class RequiredDocumentViewSet(ModelViewSet):
    queryset=RequiredDocument.objects.all()
    serializer_class=RequiredDocumentSerializer