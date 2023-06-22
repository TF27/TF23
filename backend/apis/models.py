from typing import Any
from django.db import models

# Create your models here.
class Compi_Cards(models.Model):
    id = models.AutoField(primary_key=True)
    genre = models.CharField(max_length=50 ,choices=[
        ('1','first'),
        ('2','second'),
        ('3','third'),
        ('4','forth'),
    ], default=None)
    tag = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    prize = models.CharField(max_length=100)
    desc = models.TextField()
    register = models.CharField(max_length=100)
    explore = models.CharField(max_length=100)
    img = models.ImageField(upload_to='compi')



class compi_reg(models.Model):
    # personal details
    id = models.AutoField(primary_key=True)
    compi = models.ForeignKey("Compi_Cards", on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phoneno = models.CharField(max_length=20)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    gender = models.CharField(choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ], max_length=1)
    pincode = models.IntegerField()
    address = models.TextField()

    # institute details
    instiname = models.CharField(max_length=100)
    instiadress = models.TextField(max_length=200)
    instipincode = models.IntegerField(null=True)
    yearofstudy = models.CharField(choices=[
        ('1', 'First Year'),
        ('2', 'Second Year'),
        ('3', 'Third Year'),
        ('4', 'Fourth Year'),
        ('5', 'Fifth Year'),
        ('16', '6th Standard'),
        ('17', '7th Standard'),
        ('18', '8th Standard'),
        ('19', '9th Standard'),
        ('20', '10th Standard'),
        ('21', '11th Standard'),
        ('22', '12th Standard')
    ], max_length=2)
    ca_refral = models.CharField(default=None, max_length=50)