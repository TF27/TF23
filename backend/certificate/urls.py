from django.urls import path,include
from . import views

urlpatterns=[
    # path('',views.index),
    path('<int:id>/<str:key>',views.certificate_gen,name='cert'),
    path('<int:id>/<str:key>/download',views.download),
    path('upload/csv', views.upload_csv, name='upload_csv'),
    path('<int:id>/<str:key>/ca_download',views.ca_download,name='ca_letter'),
    path('ca_upload/csv', views.ca_upload_csv, name='ca_upload_csv'),
    path('ticket/<int:id>/<str:key>', views.ticket, name='ticket'),
    path('ticket/<int:id>/<str:key>/download', views.ticket_download, name='ticket-download'),
]