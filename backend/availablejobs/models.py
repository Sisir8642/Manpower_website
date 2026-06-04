from django.db import models

# Create your models here.

GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )

class JobApplication(models.Model):
    position = models.CharField(max_length=200)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    gender=models.CharField(choices=GENDER_CHOICES,default='male')
    cv = models.FileField(upload_to="job_applications/",blank=True, null=True)
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.position}"
    

class JobDetail(models.Model):
    company_name=models.CharField(max_length=250)
    basic_salary=models.DecimalField(max_digits=10, decimal_places=2)
    position=models.CharField(max_length=250)
    category=models.CharField(max_length=250)
    contact_period=models.CharField(max_length=250)
    address=models.CharField(max_length=300)
    quantity=models.CharField(max_length=250)
    gender=models.CharField(choices=GENDER_CHOICES,default='male')
    required_qualification=models.TextField()

    def __str__(self):
        return self.company_name
