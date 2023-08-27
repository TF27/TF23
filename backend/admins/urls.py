from django.urls import path
from . import views

app_name = 'admins'

urlpatterns = [
    path('<str:compiname>', views.compi, name='compi'),
    path('export-csv-all/', views.export_data_to_csv_all, name='export-csv-all')
]