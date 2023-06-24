from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from apis.serializers import *
from apis.models import *
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.decorators import parser_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.dispatch import receiver
from django.db.models.signals import post_save as _post_save
import json
import datetime
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser, JSONParser

from django.core.mail import send_mail
from django.conf import settings


def mail_bhejo(request):
    subject = "Test Mail"
    message = "kuch nhi bass test kar rha hu django, ignore it"
    from_email = settings.EMAIL_HOST_USER
    recipient_list = ['yatharth85204@gmail.com']
    send_mail(subject, message, from_email, recipient_list)

@api_view(['GET'])
def compi_card(request):
    if request.method == 'GET':
        compi = Compi_Cards.objects.all()
        serializer = Compi_CardsSerializer(compi, many=True)
        return Response(serializer.data)

@api_view(['POST']) 
def compi_reg_form(request):
    if request.method=='POST':

        compi_reg_serializer = Compi_RegSerializer(data=JSONParser().parse(request))

        if compi_reg_serializer.is_valid():
            compi_reg_serializer.save()
            return JsonResponse("Added Successfully!!")

def page(request):
    return render(request, 'index.html')
