from django.urls import path
from . import views

app_name = 'admins'

urlpatterns = [
    path('compi/<int:gen>', views.compi, name='compi'),
]