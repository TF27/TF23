from django.urls import path
from . import views

urlpatterns = [
    path('generate/', views.generate_qrcode, name='generate_qrcode'),
    path('qrc/', views.qrc, name='qrc'),
]