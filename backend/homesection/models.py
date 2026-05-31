from django.db import models

# Create your models here.
class Slider(models.Model):
    heading=models.CharField(max_length=200)
    paragraph=models.CharField(max_length=500)
    is_active = models.BooleanField(default=True)
    def __str__(self):
        return "Slider"

#slider image and text section in the landing page. 
class SliderImage(models.Model):
    slider = models.ForeignKey(Slider, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="slider/")

    def __str__(self):
        return "sliderImages"