from django.urls import path
from . import views

app_name = 'admins'

urlpatterns = [
    path('', views.home, name='home'),
    path('<str:compiname>', views.compi, name='compi'),
    path('export-csv-all/', views.export_data_to_csv_all, name='export-csv-all'),
    path('export-compi-team-csv/', views.download_compi_team_csv, name='export-compi-team-csv'),
]