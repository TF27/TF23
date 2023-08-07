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

class NotifyView(APIView):
    def post(self, request):
        serializer = NotifyingSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def mail_bhejo(request):
    subject = "Test Mail"
    message = "kuch nhi bass test kar rha hu django, ignore it"
    from_email = 'noreply@techfest.org'
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

@parser_classes([JSONParser])
def get_team_id(request):
    try:
        team_id = request.headers.get('X-Team-ID')   
        return team_id
    except:
        team_id = None
    return team_id

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


# class Profile(APIView):
#     def get(self, request):
#         user = get_user(request)
#         if user is None:
#             return Response(status=status.HTTP_404_NOT_FOUND)
#         serializer = Compi_RegSerializer(user, many=False)
#         return Response(serializer.data)
#     def post(self, request):
#         data = request.data
#         try:
#             user = compi_reg.objects.create(
#                 google_id=data['google_id']
#             )
#             serializer = Compi_RegSerializer(user, many=False)
#             return Response(serializer.data)
#         except:
#             res = {'success': False}
#         return Response(res)
    
#     def put(self, request):
#         user = get_user(request)
#         serializer = Compi_RegSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
    

# @api_view(['PUT', 'POST', 'GET']) 
# @permission_classes([AllowAny])
# @csrf_exempt
# def ProfileView(request):
#     if request.method == 'POST':
#         data = JSONParser().parse(request)
#         print(data)
#         try:
#             user = compi_reg.objects.create(
#                 google_id=data['google_id']
#             )
#             print(user)
#             print('im trying')
#             serializer = Compi_RegSerializer(user, many=False)
#             print(serializer.is_valid())
#             return JsonResponse(serializer.data)
#         except:
#             res = {'success': False}

#         return JsonResponse(res)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         try:
#             ref_res = ''
#             user = compi_reg.objects.get(google_id=data['google_id'])
#             if(user.unique_id == None):
#                 id = 'CA-' + datetime.datetime.now().strftime('%m%d%H%M%S%f')[:-4]
#                 user.unique_id = id
#             profile = Compi_RegSerializer(user, data=data)
#             if profile.is_valid():
#                 profile.save()
#         except:
#             id = 'CA-' + datetime.datetime.now().strftime('%m%d%H%M%S%f')[:-4]
#             user = compi_reg(google_id=data['google_id'], name=data['name'], email=data['email'],
#                           phone=data['phone'], college=data['college'], pincode=data['pincode'],
#                           address=data['address'], city=data['city'], state=data['state'], unique_id=id, points=0)
#         user.save()
#         return JsonResponse({'success': True, 'referral': ref_res})




### For team

@api_view(['POST'])
@csrf_exempt
def create_team(request):
    if request.method=='POST':
        compi_team_serializer = Compi_TeamSerializer(data=request.data, many=False)
        print(compi_team_serializer.is_valid())
        if compi_team_serializer.is_valid():
            compi = compi_team_serializer.validated_data.get('compi_name')
            latest_team = compi_team.objects.filter(compi_name=compi).order_by('-team_id').first()
            next_team_id = '0269'
            if latest_team:
                last_team_id = latest_team.team_id[-4:]
                next_team_id = str(int(last_team_id) + 1).zfill(4)
            team_id = f"{compi.name}-23{next_team_id}"
            compi_team_serializer.save(team_id=team_id)
            # compi_team_serializer.save()
            return JsonResponse(compi_team_serializer.data)
        res = {'success': False}

        return JsonResponse(res)

@api_view(['PUT'])
@csrf_exempt
def join_team(request):
    if request.method == 'PUT':
        print('here it is')
        team_id = get_team_id(request)
        team = compi_team.objects.get(team_id=team_id)
        if team:
            print('hi')
            parti_name = request.data['parti_name']
            parti_email = request.data['parti_email']
            print(parti_email, parti_name)
            if(team.parti1_email == parti_email or
               team.parti2_email == parti_email or
               team.parti3_email == parti_email):
                return JsonResponse({'success': False, 'message': 'You are already in the team'})
            if not team.parti1_email:
                team.parti1_name = parti_name
                team.parti1_email = parti_email
            elif not team.parti2_email:
                team.parti2_name = parti_name
                team.parti2_email = parti_email
            elif not team.parti3_email:
                team.parti3_name = parti_name
                team.parti3_email = parti_email
            else:
                return JsonResponse({'success': False, 'message': 'Team is already full'})
            team.save()
            serializer = Compi_TeamSerializer(team)
            return JsonResponse(serializer.data)       
        print(parti_email, parti_name)
        return JsonResponse({'success': False, 'message': 'Team not found'})


@api_view(['PUT'])
@csrf_exempt
def leave_team(request):
    if request.method == 'PUT':
        team_id = get_team_id(request)
        team = compi_team.objects.get(team_id=team_id)
        if team:
            parti_name = request.data['parti_name']
            parti_email = request.data['parti_email']
            if team.parti1_email == parti_email:
                team.parti1_name = None
                team.parti1_email = None
            elif team.parti2_email == parti_email:
                team.parti2_name = None
                team.parti2_email = None
            elif team.parti3_email == parti_email:
                team.parti3_name = None
                team.parti3_email = None
            else:
                return JsonResponse({'success': False, 'message': 'You are not in the team'})
            team.save()
            serializer = Compi_TeamSerializer(team)
            return JsonResponse(serializer.data)       
        
        return JsonResponse({'success': False, 'message': 'Team not found'})
    

@api_view(['DELETE'])
@csrf_exempt
def delete_team(request):
    if request.method == 'DELETE':
        team_id = get_team_id(request)
        parti_email = request.data['parti_email']
        # team = compi_team.objects.get(team_id=team_id)
        try:
            team = compi_team.objects.get(team_id=team_id, team_leader_email=parti_email)
        except compi_team.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Team not found'})

        team.delete()
        return JsonResponse({'success': True, 'message': 'Team deleted successfully'})