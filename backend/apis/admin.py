from django.contrib import admin
from django.apps import apps
from .models import *
from django.http import HttpResponse

# Register your models here.
admin.site.register(Compi_Cards)
admin.site.register(compi_reg)