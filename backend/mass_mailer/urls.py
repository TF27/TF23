from django.urls import path
from . import views

urlpatterns = [
    path('mail_bhejo/', views.mail_bhejo, name="mail_bhejo"),
    path('email-form/', views.email_form_view, name='email_form'),
    path('send-email/', views.send_email, name='send_email'),
]