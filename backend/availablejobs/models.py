from django.db import models

# Create your models here.
class JobApplication(models.Model):
    lot_no = models.CharField(max_length=100)
    position = models.CharField(max_length=200)

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)

    company = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    others = models.TextField(blank=True, null=True)

    cv = models.FileField(upload_to="job_applications/",blank=True, null=True)

    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.position}"