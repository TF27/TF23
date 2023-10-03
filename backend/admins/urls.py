from django.urls import path
from . import views

app_name = 'admins'

urlpatterns = [
    path('', views.home, name='home'),
    path('<str:compiname>', views.compi, name='compi'),
    path('export-csv-all/', views.export_data_to_csv_all, name='export-csv-all'),
    path('download_compi_team_csv/', views.download_compi_team_csv, name='download_compi_team_csv'),
]