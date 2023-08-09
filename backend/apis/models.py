from typing import Any
from django.db import models

# Create your models here.
class Compi(models.Model):
    # id = models.AutoField(primary_key=True)
    genre = models.CharField(max_length=50 ,choices=[
        ('1','Zonals'),
        ('2','Compis'),
        ('3','Ideates'),
        ('4','forth'),
    ], default=None)
    tag = models.CharField(max_length=100)
    name = models.CharField(max_length=100, primary_key=True)
    max_team_length = models.IntegerField(blank=True, null=True)
    prize = models.CharField(max_length=100)
    desc = models.TextField()
    register = models.CharField(max_length=100)
    explore = models.CharField(max_length=100)
    img = models.ImageField(upload_to='compi')
    statement = models.FileField(upload_to='ProblemStatements', null=True, blank=True)
    sponsorImg = models.ImageField(upload_to='compi_sponsors', null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    stucture = models.TextField(null=True, blank=True)
    timeline = models.TextField(null=True, blank=True)
    faqs = models.TextField(null=True, blank=True)
    rules = models.TextField(null=True, blank=True)
    contact = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
    
class Notifying(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    phoneNum = models.IntegerField()
    
    def __str__(self):
        return self.username

class compi_reg(models.Model):
    # personal details
    id = models.AutoField(primary_key=True)
    tf_id = models.CharField(max_length=50, blank=True, null=True)
    compi = models.ForeignKey(Compi, on_delete=models.CASCADE)
    # compi = models.CharField(max_length=50)
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    google_id = models.CharField(max_length=255, null=True, blank=True)
    phoneno = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ], max_length=255, null=True, blank=True)
    pincode = models.IntegerField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    # institute details
    instiname = models.CharField(max_length=255, blank=True, null=True)
    instiadress = models.TextField(max_length=200, blank=True, null=True)
    instipincode = models.IntegerField(blank=True, null=True)
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
    ], max_length=255, blank=True, null=True)
    ca_refral = models.CharField(default=None, max_length=50, blank=True, null=True)

class compi_team(models.Model):
    compi_name = models.ForeignKey(Compi, default=None, on_delete=models.CASCADE)
    max_team_length = models.IntegerField(blank=True, null=True)
    # team_name = models.CharField(max_length=50, unique=True, blank=True, null=True)
    team_id = models.CharField(max_length=50, unique=True, blank=True, null=True)
    team_leader_name = models.CharField(max_length=50, blank=True, null=True)
    team_leader_email = models.EmailField(max_length=254, blank=True, null=True)
    parti1_name = models.CharField(max_length=50, blank=True, null=True)
    parti1_email = models.EmailField(max_length=254, blank=True, null=True)
    parti2_name = models.CharField(max_length=50, blank=True, null=True)
    parti2_email = models.EmailField(max_length=254, blank=True, null=True)
    parti3_name = models.CharField(max_length=50, blank=True, null=True)
    parti3_email = models.EmailField(max_length=254, blank=True, null=True)
    team_length = models.IntegerField(blank=True, null=True)
    participants = models.CharField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.max_team_length = self.compi_name.max_team_length
        super().save(*args, **kwargs)

    
# Workshops

class Workshop(models.Model):
    # id = models.AutoField(primary_key=True)
    genre = models.CharField(max_length=50 ,choices=[
        ('1','Zonals'),
        ('2','Compis'),
        ('3','Ideates'),
        ('4','forth'),
    ], default=None)
    tag = models.CharField(max_length=100)
    name = models.CharField(max_length=100, primary_key=True)
    max_team_length = models.IntegerField(blank=True, null=True)
    prize = models.CharField(max_length=100)
    desc = models.TextField()
    register = models.CharField(max_length=100)
    explore = models.CharField(max_length=100)
    img = models.ImageField(upload_to='workshop')
    sponsorImg = models.ImageField(upload_to='workshop_sponsors', null=True, blank=True)
    about = models.TextField(null=True)
    stucture = models.TextField(null=True)
    timeline = models.TextField(null=True)
    faqs = models.TextField(null=True)
    rules = models.TextField(null=True)
    contact = models.TextField(null=True)

    def __str__(self):
        return self.name
    
class workshop_reg(models.Model):
    # personal details
    id = models.AutoField(primary_key=True)
    tf_id = models.CharField(max_length=50, blank=True, null=True)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    # compi = models.CharField(max_length=50)
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    google_id = models.CharField(max_length=255, null=True, blank=True)
    phoneno = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ], max_length=255, null=True, blank=True)
    pincode = models.IntegerField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    # institute details
    instiname = models.CharField(max_length=255, blank=True, null=True)
    instiadress = models.TextField(max_length=200, blank=True, null=True)
    instipincode = models.IntegerField(blank=True, null=True)
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
    ], max_length=255, blank=True, null=True)
