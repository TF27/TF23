from django.contrib import admin
from django.apps import apps
from .models import *
from django.http import HttpResponse

# Register your models here.
admin.site.register(Compi)
admin.site.register(compi_reg)
admin.site.register(compi_team)
<<<<<<< HEAD
admin.site.register(Notifying)
=======


#Workshop
admin.site.register(Workshop)
admin.site.register(workshop_reg)
>>>>>>> 5472c72def0ed028d142bc2136f1a05d158c67a5
