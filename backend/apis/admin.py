from django.contrib import admin
from django.apps import apps
from .models import *
from django.http import HttpResponse

# Register your models here.
admin.site.register(Compi)
admin.site.register(compi_reg)
admin.site.register(compi_team)
admin.site.register(Notifying)


#Workshop
admin.site.register(Workshop)
admin.site.register(workshop_reg)

admin.site.register(Robowars)
admin.site.register(robowar_reg)

admin.site.register(AccoReg)

admin.site.register(Summits)
admin.site.register(SummitSpeaker)
admin.site.register(SummitReg)

admin.site.register(IFT)
admin.site.register(IFTReg)

admin.site.register(Faces)