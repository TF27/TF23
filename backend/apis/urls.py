from django.urls import path
from . import views

app_name = 'apis'

urlpatterns = [
    path('compi_card/', views.compi_card, name='compi_card'),
]