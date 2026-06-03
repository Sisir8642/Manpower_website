from django.db import models

class CertificateCategory(models.Model):
    title = models.CharField(max_length=255)
    def __str__(self):
        return self.title

class CertificateImage(models.Model):
    category = models.ForeignKey(
        CertificateCategory,
        on_delete=models.CASCADE,
        related_name='images'
    )
    image = models.ImageField(upload_to='certificates/')

    def __str__(self):
        return f"{self.category.title}"
    

