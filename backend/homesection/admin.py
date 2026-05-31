from django.contrib import admin
from .models import SliderImage, Slider
# Register your models here.

#slider images in home 
class SliderImageInline(admin.TabularInline):
    model= SliderImage
    extra= 1
    
@admin.register(Slider)
class Slider(admin.ModelAdmin):
    inlines = [SliderImageInline]
    list_display = ("heading", "is_active")