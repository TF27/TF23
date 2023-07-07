from django.urls import path
from . import views

app_name = 'apis'

urlpatterns = [
    path('compi_card/', views.compi_card, name='compi_card'),
    path('compi_reg/', views.compi_reg_form, name='compi_reg_form'),
    path('page/', views.page, name='page'),
    path('mail/', views.mail_bhejo, name='mail_bhejo'),
    # path('profile/', views.ProfileView, name='profile'),
    path('create_team/', views.create_team, name='create_team'),
    path('check_reg/', views.check_reg, name='check_reg'),
    path('join_team/', views.join_team, name='join_team'),
    path('leave_team/', views.leave_team, name='leave_team'),
    path('delete_team/', views.delete_team, name='delete_team'),
]

