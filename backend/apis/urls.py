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
    path('single_parti/', views.single_parti, name='single_parti'),
    path('check_reg/', views.check_reg, name='check_reg'),
    path('join_team/', views.join_team, name='join_team'),
    path('add_parti/', views.add_parti, name='add_parti'),
    path('leave_team/', views.leave_team, name='leave_team'),
    path('delete_team/', views.delete_team, name='delete_team'),
    path('notify/', views.NotifyView.as_view(), name='notify'),
    path('workshop/', views.workshop_card, name='workshop_card'),
    path('workshop_reg/', views.workshop_reg_form, name='workshop_reg_form'),
    path('robowars/', views.robowar_card, name='robowars_card'),
    path('robowars_reg/', views.robowars_reg_form, name='robowars_reg_form'),
    path('acco_reg/', views.acco_reg, name='acco_reg'),
    path('acco_proof/', views.proof_upload, name='proof_upload'),
    path('sustaintest_reg/', views.sustain_reg_test, name='sustain_reg_test'),    
    path('sustainwebinar_reg/', views.sustain_reg_test, name='sustain_reg_webinar'),
    
]

