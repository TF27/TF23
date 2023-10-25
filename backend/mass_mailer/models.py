from django.db import models
import random

class Email(models.Model):
    your_id = models.CharField(max_length=50, unique=True, editable=False)
    subject = models.CharField(max_length=100, default=None)
    message = models.TextField(blank=True, null=True)
    recipient_list = models.FileField(upload_to='mail_recipients', blank=True, null=True)   

    def __str__(self):
        return self.subject
    
    def save(self, *args, **kwargs):
        if not self.your_id:
            # Generate a random your_id (e.g., a 10-character alphanumeric string)
            self.your_id = ''.join(random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') for _ in range(10))
        super(Email, self).save(*args, **kwargs)