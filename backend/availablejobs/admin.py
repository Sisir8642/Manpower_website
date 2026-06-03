from django.contrib import admin
from .models import JobApplication,JobDetail

# Register your models here.
@admin.register(JobApplication)
class JobApplication(admin.ModelAdmin):
    list_display=(
        'id',
        'name',
        'email',
        'phone_number',
        'position',
        'applied_at',
    )
    list_filter = [
        'position'
    ]

admin.site.register(JobDetail)