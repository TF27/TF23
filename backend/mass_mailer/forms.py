from django import forms
from .models import Email

class EmailForm(forms.ModelForm):
    class Meta:
        model = Email
        fields = ['subject', 'message', 'recipient_list']

class YourIDForm(forms.Form):
    your_id = forms.CharField(label='Your ID', max_length=10)