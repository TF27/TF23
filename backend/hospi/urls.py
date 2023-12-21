from django.urls import *
from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('user_data/', views.user_data_list, name='user_data_list'),
    path('api/rooms/<str:payment_id>/', views.get_rooms_for_payment, name='get_rooms_for_payment'),
]