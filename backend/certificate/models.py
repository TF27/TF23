from django.db import models

class CertificateImage(models.Model):
    image_id=models.CharField(max_length=20,unique=True)
    template=models.ImageField(blank=True)
    name_x=models.IntegerField(blank=True,null=True)
    name_y=models.IntegerField(blank=True,null=True)
    name_w=models.IntegerField(blank=True,null=True)
    comp_x=models.IntegerField(blank=True,null=True)
    comp_y=models.IntegerField(blank=True,null=True)
    comp_w=models.IntegerField(blank=True,null=True)
    rank_x=models.IntegerField(blank=True,null=True)
    rank_y=models.IntegerField(blank=True,null=True)
    rank_w=models.IntegerField(blank=True,null=True)
    qr_x = models.IntegerField(blank=True, null=True)
    qr_y = models.IntegerField(blank=True, null=True)
    qr_scale=models.FloatField(blank=True,null=True)
    def __str__(self):
        return "Image-ID:" + self.image_id

class UserData(models.Model):
    student_name=models.CharField(max_length=255)
    rank=models.CharField(max_length=255,blank=True)
    competition_name=models.CharField(max_length=255)
    image_id=models.CharField(max_length=20)

class LetterImage(models.Model):
    image_id=models.CharField(max_length=20,unique=True)
    template=models.ImageField(blank=True)
    def __str__(self):
        return "Image-ID:" + self.image_id

class CaData(models.Model):
    student_name=models.CharField(max_length=255)
    ca_id=models.CharField(max_length=255,blank=True)
    image_id=models.CharField(max_length=20)

class Ticket(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

