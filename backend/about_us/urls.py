from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'certificate_category',CertificateCategoryViewSet , basename='certificate_category')

urlpatterns = [
    path('',include(router.urls))
    
]
