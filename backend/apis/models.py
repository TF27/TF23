from typing import Any
from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class Compi(models.Model):
    # id = models.AutoField(primary_key=True)
    genre = models.CharField(max_length=50 ,choices=[
        ('1','Zonals'),
        ('2','Compis'),
        ('3','Ideates'),
        ('4','forth'),
        ('5', 'dummy'),
    ], default=None)
    tag = models.CharField(max_length=100)
    name = models.CharField(max_length=100, primary_key=True)
    max_team_length = models.IntegerField(blank=True, null=True)
    prize = models.CharField(max_length=100)
    desc = models.TextField()
    img = models.ImageField(upload_to='compi')
    statement = models.FileField(upload_to='ProblemStatements', null=True, blank=True)
    sponsorImg = models.ImageField(upload_to='compi_sponsors', null=True, blank=True)
    sponsorLink = models.CharField(max_length=250, null=True, blank=True)
    reg_count = models.IntegerField(default=0)
    closed = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    
class Notifying(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    phoneNum = models.IntegerField()
    loc = models.CharField(max_length=100)
    
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
        ('22', '12th Standard'),
        ('23', 'Graduated'),
    ], max_length=255, blank=True, null=True)
    zonals = models.CharField(choices=[
        ('1', 'Mumbai'),
        ('2', 'Bhopal'),
        ('3', 'Lucknow'),
        ('4', 'Jaipur'),
        ('5', 'Bangalore'),
        ('6', 'Nepal'),
    ], max_length=255, blank=True, null=True)

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
    single_parti = models.BooleanField(default=False)
    def save(self, *args, **kwargs):
        self.max_team_length = self.compi_name.max_team_length
        super().save(*args, **kwargs)

    
# Workshops

class Workshop(models.Model):
    workshop_id = models.IntegerField(null=True, default=0)
    name = models.CharField(max_length=100, primary_key=True)
    prize = models.CharField(max_length=100)
    ex_prize = models.CharField(null=True, blank=True, max_length=100)
    desc = models.TextField()
    img = models.ImageField(upload_to='workshop')
    sponsorImg = models.ImageField(upload_to='workshop_sponsors', null=True, blank=True)
    sponsorLink = models.CharField(max_length=250, null=True, blank=True)
    statement = models.FileField(upload_to='ProblemStatements', null=True, blank=True)
    paymentLink = models.TextField(null=True, blank=True)
    closed = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    
class workshop_reg(models.Model):
    # personal details
    id = models.AutoField(primary_key=True)
    worksho_id = models.CharField(max_length=50, blank=True, null=True)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    phoneno = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ], max_length=255, null=True, blank=True)
    pincode = models.IntegerField(blank=True, null=True)
    ca_referral = models.CharField(max_length=255, blank=True, null=True)
    paid = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class Robowars(models.Model):
    robowar_id = models.IntegerField(null=True, default=0)
    category = models.CharField(max_length=100, primary_key=True)
    img = models.ImageField(upload_to='robowars')
    statement = models.FileField(upload_to='ProblemStatements', null=True, blank=True)

# class RobowarTeamMember(models.Model):
#     name = models.CharField(max_length=50)
#     email = models.EmailField(max_length=254)
#     phone = models.CharField(max_length=254)    
class robowar_reg(models.Model):
    robowar_id = models.CharField(max_length=50, blank=True, null=True)
    category = models.ForeignKey(Robowars, on_delete=models.CASCADE)
    team_name = models.CharField(max_length=50, unique=True, blank=True, null=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    college = models.CharField(max_length=1000, null=True, blank=True)
    team_leader_name = models.CharField(max_length=50, blank=True, null=True)
    team_leader_email = models.EmailField(max_length=254, blank=True, null=True)
    team_leader_phone = models.CharField(max_length=254, blank=True, null=True)
    # members = models.ManyToManyField(RobowarTeamMember)
    parti1_name = models.CharField(max_length=50, blank=True, null=True)
    parti1_email = models.EmailField(max_length=254, blank=True, null=True)
    parti1_phone = models.CharField(max_length=254, blank=True, null=True)
    parti2_name = models.CharField(max_length=50, blank=True, null=True)
    parti2_email = models.EmailField(max_length=254, blank=True, null=True)
    parti2_phone = models.CharField(max_length=254, blank=True, null=True)
    parti3_name = models.CharField(max_length=50, blank=True, null=True)
    parti3_email = models.EmailField(max_length=254, blank=True, null=True)
    parti3_phone = models.CharField(max_length=254, blank=True, null=True)
    team_length = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return self.category.category + " " + self.team_name
    
class AccoReg(models.Model):
    acco_id = models.CharField(max_length=50, blank=True, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True, max_length=255)
    phone = models.CharField(blank=True, null=True, max_length=255)
    gender = models.CharField(blank=True, null=True, max_length=255)
    dob = models.CharField(blank=True, null=True, max_length=255)
    city = models.CharField(blank=True, null=True, max_length=255)
    aadhar = models.CharField(blank=True, null=True, max_length=255)
    aadhar_proof = models.FileField(upload_to='acco', null=True, blank=True)
    no_of_male = models.IntegerField(blank=True, null=True)
    no_of_female = models.IntegerField(blank=True, null=True)
    checkin = models.CharField(blank=True, null=True, max_length=255)
    checkout = models.CharField(blank=True, null=True, max_length=255)
    created_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)
    payment_id = models.CharField(blank=True, null=True, max_length=255)
    payment_proof = models.FileField(upload_to='acco', null=True, blank=True)
    paid = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    

class SustainRegTest(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True, max_length=255)
    phone = models.CharField(blank=True, null=True, max_length=255)
    college = models.CharField(blank=True, null=True, max_length=255)
    country = models.CharField(blank=True, null=True, max_length=255)
    testdate = models.CharField(blank=True, null=True, max_length=255)

class SustainRegWebinar(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True, max_length=255)
    phone = models.CharField(blank=True, null=True, max_length=255)
    college = models.CharField(blank=True, null=True, max_length=255)
    country = models.CharField(blank=True, null=True, max_length=255)

class Summits(models.Model):
    regLink=models.CharField(max_length=255, null=True, blank=True)
    exploreLink=models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    img = models.ImageField(upload_to='summit', null=True, blank=True)
    desc = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name

class SummitSpeaker(models.Model):
    ching_id = models.IntegerField(null=True, default=0)
    name = models.CharField(max_length=255, null=True, blank=True)
    designation = models.CharField(max_length=255, null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    desc = models.TextField(null=True, blank=True)
    summit = models.CharField(choices=[
        ('Industry', 'Industry'),
        ('Fintech', 'Fintech'),
    ], max_length=255, null=True, blank=True)
    img = models.ImageField(upload_to='summit_speakers', null=True, blank=True)
    
    def __str__(self):
        return self.name

class SummitReg(models.Model):
    id = models.AutoField(primary_key=True)
    summit_id = models.CharField(max_length=50, blank=True, null=True)
    # summit = models.CharField(choices=[
    #     ('industry', 'industry'),
    #     ('fintech', 'fintech'),
    # ], max_length=255, null=True, blank=True)
    summitisho = models.ForeignKey(Summits, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    phoneno = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ], max_length=255, null=True, blank=True)
    pincode = models.IntegerField(blank=True, null=True)
    paid = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    
class IFT(models.Model):
    ift_id = models.IntegerField(null=True, default=0)
    category = models.CharField(max_length=100, primary_key=True)
    img = models.ImageField(upload_to='ift')
    statement = models.FileField(upload_to='ift/ps', null=True, blank=True)
    
    def __str__(self):
        return self.category
    
class IFTReg(models.Model):
    tf_id = models.CharField(max_length=50, blank=True, null=True)
    category = models.ForeignKey(IFT, on_delete=models.CASCADE)
    driver_name = models.CharField(max_length=50, blank=True, null=True)
    driver_email = models.EmailField(max_length=254, blank=True, null=True)
    driver_phone = models.CharField(max_length=254, blank=True, null=True)
    pit_name = models.CharField(max_length=50, blank=True, null=True)
    pit_email = models.EmailField(max_length=254, blank=True, null=True)
    pit_phone = models.CharField(max_length=254, blank=True, null=True)
    pincode = models.IntegerField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    country = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.category.category + " " + self.driver_name

class Faces(models.Model):
    ching_id = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    img = models.ImageField(upload_to='faces', null=True, blank=True)
    category = models.CharField(choices=[
        ('Exhi', 'Exhi'),
        ('Lect', 'Lect'),
        ('Techx','Techx'),
    ], max_length=255, null=True, blank=True)
    designation = models.CharField(max_length=255, null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    desc = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

class AppData(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=255, null=True, blank=True)
    visitors = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f'{self.name} - {self.email}'