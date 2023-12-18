from django.db import models

# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name