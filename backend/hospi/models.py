from django.db import models
# from django_postgres_extensions.models.fields import ArrayField

# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=100, blank=True, null=True)
    payment_id = models.CharField(max_length=100, blank=True, null=True)
    boys = models.IntegerField(blank=True, null=True)
    girls = models.IntegerField(blank=True, null=True)
    # rooms = ArrayField(models.CharField(max_length=100, blank=True, null=True), blank=True, null=True)