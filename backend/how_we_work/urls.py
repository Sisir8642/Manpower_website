from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *


router=DefaultRouter()
router.register(r'Team_member',TeamMemberViewSet,basename='Team_member')
router.register(r'Document',RequiredDocumentViewSet,basename='Document')

urlpatterns = [
    path('',include(router.urls))
]
