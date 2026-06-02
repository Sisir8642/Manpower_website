from django.contrib import admin
from .models import CertificateCategory,CertificateImage

# Register your models here.
class CertificateImageInline(admin.TabularInline):
    model = CertificateImage
    extra = 1

@admin.register(CertificateCategory)
class CertificateCategory(admin.ModelAdmin):
    list_display = ['id', 'title',]
    search_fields = ['id','title']
    inlines = [CertificateImageInline]