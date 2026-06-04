from django.db import models

# Create your models here.
class TeamMember(models.Model):
    name=models.CharField(max_length=250)
    position=models.CharField(max_length=250)
    image=models.ImageField(upload_to='team_member/')

    def __str__(self):
        return self.name



class RequiredDocument(models.Model):
    title=models.CharField(max_length=250)
    document=models.FileField(upload_to="documents/")


    def __str__(self):
        return self.title