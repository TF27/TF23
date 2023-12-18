from django.contrib import admin
from django.apps import apps
from .models import *
from django.http import HttpResponse

admin.site.register(User)
admin.site.register(UserMatch)
admin.site.register(Match)
