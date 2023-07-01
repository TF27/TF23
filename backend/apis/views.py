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


@parser_classes([JSONParser])
def get_user(request):
    try: 
        google_id = request.headers.get('X-Google-UID')
        # print(google_id)
        users = compi_reg.objects.filter(google_id=google_id)
        if users.exists():
            for user in users:
                continue
        else:
            user = None
            print(user, 'get user else')
        # print(user.compi)
    except:
        user = None
        print(user, 'get user except')
    print(user, 'get user')
    return user

@parser_classes([JSONParser])
def get_compi(request):
    try: 
        # print('hi')
        compi = request.headers.get('X-Compi-ID')
        # print(compi)
        return compi
    except:
        compi = None
    return compi

@api_view(['GET'])
def compi_card(request):
    if request.method == 'GET':
        try: 
            user = get_user(request)
            google_id = user.google_id if user else None
            compi = Compi.objects.all()
            serializer = Compi_CardsSerializer(compi, many=True, context={'user': google_id})
            return Response(serializer.data)
        except:
            compi = Compi.objects.all()
            serializer = Compi_CardsSerializer(compi, many=True, context={'request': request})
            return Response(serializer.data)

# @api_view(['GET'])
# def compi_card(request):
#     if request.method == 'GET':
#         try:
#             google_id = request.META.get('HTTP_X_GOOGLE_UID')
#             compi = Compi.objects.all()
#             serializer = Compi_CardsSerializer(compi, many=True, context={'user': google_id})
#             return Response(serializer.data)
#         except:
#             compi = Compi.objects.all()
#             serializer = Compi_CardsSerializer(compi, many=True, context={'request': request})
#             return Response(serializer.data)

@api_view(['GET'])
def check_reg(request):
    if request.method == 'GET':
        try:
            user = get_user(request).google_id
            compi = get_compi(request)
            gotcha = compi_reg.objects.filter(google_id=user)
            # print(gotcha, 'gotcha it is')
            compi_exists = gotcha.filter(compi=compi).exists()
            return Response(compi_exists)
        except:
            return Response(False)

# @csrf_exempt
@api_view(['POST']) 
@csrf_exempt
def compi_reg_form(request):
    if request.method=='POST':
        compi_reg_serializer = Compi_RegSerializer(data=request.data, many=False)
        print(compi_reg_serializer.is_valid())
        if compi_reg_serializer.is_valid():
            compi_reg_serializer.save()
            return JsonResponse(compi_reg_serializer.data)
        res = {'success': False}
        print(res)
        return JsonResponse(res)


def page(request):
    return render(request, 'index.html')


class Profile(APIView):
    def get(self, request):
        user = get_user(request)
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = Compi_RegSerializer(user, many=False)
        return Response(serializer.data)
    def post(self, request):
        data = request.data
        try:
            user = compi_reg.objects.create(
                google_id=data['google_id']
            )
            serializer = Compi_RegSerializer(user, many=False)
            return Response(serializer.data)
        except:
            res = {'success': False}
        return Response(res)
    
    def put(self, request):
        user = get_user(request)
        serializer = Compi_RegSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    

@api_view(['PUT', 'POST', 'GET']) 
@permission_classes([AllowAny])
@csrf_exempt
def ProfileView(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        print(data)
        try:
            user = compi_reg.objects.create(
                google_id=data['google_id']
            )
            print(user)
            print('im trying')
            serializer = Compi_RegSerializer(user, many=False)
            print(serializer.is_valid())
            return JsonResponse(serializer.data)
        except:
            res = {'success': False}

        return JsonResponse(res)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        try:
            ref_res = ''
            user = compi_reg.objects.get(google_id=data['google_id'])
            if(user.unique_id == None):
                id = 'CA-' + datetime.datetime.now().strftime('%m%d%H%M%S%f')[:-4]
                user.unique_id = id
            profile = Compi_RegSerializer(user, data=data)
            if profile.is_valid():
                profile.save()
        except:
            id = 'CA-' + datetime.datetime.now().strftime('%m%d%H%M%S%f')[:-4]
            user = compi_reg(google_id=data['google_id'], name=data['name'], email=data['email'],
                          phone=data['phone'], college=data['college'], pincode=data['pincode'],
                          address=data['address'], city=data['city'], state=data['state'], unique_id=id, points=0)
        user.save()
        return JsonResponse({'success': True, 'referral': ref_res})




### For team

@api_view(['POST'])
@csrf_exempt
def create_team(request):
    if request.method=='POST':
        compi_team_serializer = Compi_TeamSerializer(data=request.data, many=False)
        print(compi_team_serializer)
        if compi_team_serializer.is_valid():
            compi_team_serializer.save()
            return JsonResponse(compi_team_serializer.data)
        res = {'success': False}

        return JsonResponse(res)