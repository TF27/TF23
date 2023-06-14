from django.db import models

# Create your models here.
class Compi_Cards(models.Model):
    id = models.AutoField(primary_key=True)
    tag = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    prize = models.CharField(max_length=100)
    desc = models.TextField()
    register = models.CharField(max_length=100)
    explore = models.CharField(max_length=100)
    img = models.ImageField(upload_to='compi')