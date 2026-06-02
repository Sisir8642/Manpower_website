from django.contrib import admin
from .models import SliderImage, Slider,WhyUs,WhyUsItem,MessageChairperson
# Register your models here.

#slider images in home 
class SliderImageInline(admin.TabularInline):
    model= SliderImage
    extra= 1
    
@admin.register(Slider)
class Slider(admin.ModelAdmin):
    inlines = [SliderImageInline]
    list_display = ("heading", "is_active")


class WhyUsItemInline(admin.TabularInline):
    model=WhyUsItem
    extra = 1

@admin.register(WhyUs)
class WhyUs(admin.ModelAdmin):
    inlines = [WhyUsItemInline]
    list_display = ['id', 'description']
