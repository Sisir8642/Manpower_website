from django.contrib import admin
from .models import JobApplication

# Register your models here.
@admin.register(JobApplication)
class JobApplication(admin.ModelAdmin):
    list_display=(
        'id',
        'name',
        'email',
        'phone_number',
        'lot_no',
        'position',
        'company',
        'location',
        'applied_at',
    )
    list_filter = (
        'lot_no',
    )
