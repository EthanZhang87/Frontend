from django.db import models

# Create your models here.


class registrations(models.Model):
    team_name = models.CharField(max_length=200)
    email = models.EmailField(max_length = 254)


    def __str__(self):
        return self.team_name
    
    class Meta:
        verbose_name = 'Wailist Registration'
        verbose_name_plural = 'Waitlist Registrations'