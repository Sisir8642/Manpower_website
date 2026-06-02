from django.db import models

# Create your models here.
class TeamMember(models.Model):
    name=models.CharField(max_length=250)
    position=models.CharField(max_length=250)
    image=models.ImageField(upload_to='team_member/')

    def __str__(self):
        return self.name