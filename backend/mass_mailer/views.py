import os
from django.shortcuts import render, redirect
from .forms import EmailForm,YourIDForm
from django.contrib.admin.views.decorators import staff_member_required
import pandas as pd
from .models import *
from django.core.mail import send_mail, send_mass_mail

# Create your views here.
@staff_member_required
def mail_bhejo(request):
    subject = "Test Mail"
    message = "This is a test mail"
    from_email = "noreply@techfest.org"
    recipient_list = ["yatharth85204@gmail.com"]
    send_mail(subject, message, from_email, recipient_list)


def email_form_view(request):
    if request.method == 'POST':
        form = EmailForm(request.POST, request.FILES)
        if form.is_valid():
            email = form.save()  # Save the form data to the database
            return render(request, 'emails/success.html', {'your_id': email.your_id})
    else:
        form = EmailForm()
    return render(request, 'emails/email_form.html', {'form': form})

@staff_member_required
def send_email(request):
    if request.method == 'POST':
        form = YourIDForm(request.POST)
        if form.is_valid():
            your_id = form.cleaned_data['your_id']
            email = Email.objects.get(your_id=your_id)
            df = pd.read_csv(email.recipient_list.path)
            subject = email.subject
            message = email.message
            recipient_list = df['Email'].dropna().tolist()
            from_email = "noreply@techfest.org"

            # Send emails
            for recipient in recipient_list:
                send_mail(subject, message, from_email, [recipient])

            num_emails = len(recipient_list)

            os.remove(email.recipient_list.path)
            email.delete()

            return render(request, 'emails/email_count.html', {'num_emails': num_emails})
    else:
        form = YourIDForm()

    return render(request, 'emails/id_form.html', {'form': form})