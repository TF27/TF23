from django.contrib import admin
from django.apps import apps
from .models import Compi_Cards
from django.http import HttpResponse

# Register your models here.
admin.site.register(Compi_Cards)