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

