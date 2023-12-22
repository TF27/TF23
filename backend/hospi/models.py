from django.db import models
# from django_postgres_extensions.models.fields import ArrayField



# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=100, blank=True, null=True)
    payment_id = models.CharField(max_length=100, unique=True, blank=True, null=True)
    boys = models.IntegerField(blank=True, null=True)
    girls = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.payment_id

class PaymentRoomRelation(models.Model):
    # payment_id = models.CharField(max_length=100, blank=False, primary_key=True)
    room_number = models.CharField(max_length=100, blank=True, null=True)
    user_data = models.ForeignKey(UserData, on_delete=models.CASCADE)

    def __str__(self):
        return f"Payment ID: {self.user_data}, Room Number: {self.room_number}"
    
class RoomData(models.Model):
    hostel = models.CharField(max_length=100, blank=True, null=True)
    room = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=100, choices=[
        ('M', 'M'),
        ('F', 'F')
    ])
    people = models.IntegerField(blank=True, null=True)
    people_in = models.IntegerField(blank=True, null=True)

