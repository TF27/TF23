from django.core.mail import send_mail
from django.conf import settings

def send_mail_touser():
    subject = "Test Mail"
    message = "kuch nhi bass test kar rha hu django, ignore it"
    from_email = settings.EMAIL_HOST_USER
    recipient_list = ['yatharth85204@gmail.com']

    send_mail(subject, message, from_email, recipient_list)