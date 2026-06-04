from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobApplicationViewSet,JobDetailViewSet

router = DefaultRouter()
router.register(r'job-applications', JobApplicationViewSet, basename='job-application')
router.register(r'job-detail',JobDetailViewSet,basename='job-detail')

urlpatterns = [
    path('', include(router.urls)),
]
