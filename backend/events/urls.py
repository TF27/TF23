from django.urls import include, path, re_path
from events import views

urlpatterns = [
    path('mun', views.mun, name='mun-home'),
    path('twmun', views.mun, name='mun-home'),
]