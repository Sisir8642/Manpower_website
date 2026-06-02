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

class MessageChairperson(models.Model):
    name=models.CharField(max_length=250)
    postion=models.CharField(max_length=250)
    image=models.ImageField(upload_to='chairperson/')
    tiltle=models.CharField(max_length=250,blank=True,null=True)
    message=models.TextField(blank=True,null=True)

    def __str__(self):
        return self.message


class WhyUs(models.Model):
    description=models.TextField(null=True,blank=True)

    def __str__(self):
        return self.description

class WhyUsItem(models.Model):
    section = models.ForeignKey(
        WhyUs,
        on_delete=models.CASCADE,
        related_name='items'
    )
    title=models.CharField(max_length=250,blank=True,null=True)
    description=models.TextField(null=True,blank=True)

    def __str__(self):
        return self.title



