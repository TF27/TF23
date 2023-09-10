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

from django.core.mail import send_mail, send_mass_mail
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
            # print(user, 'get user else')
        # print(user.compi)
    except:
        user = None
        # print(user, 'get user except')
    # print(user, 'get user')
    return user

@parser_classes([JSONParser])
def get_user_id(request):
    try:
        email = request.headers.get('X-Email')
        users = compi_reg.objects.filter(email=email)
        if users.exists():
            for user in users:
                continue
        else:
            user=None
    except:
        user = None
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
        # print(request.headers)
        team_id = request.headers.get('X-Team-ID') 
        # print(team_id)  
        return team_id
    except:
        team_id = None
    return team_id

@api_view(['GET'])
def compi_card(request):
    if request.method == 'GET':
        try: 
            user = get_user_id(request)
            email = user.email if user else None
            compi = Compi.objects.all()
            serializer = Compi_CardsSerializer(compi, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            compi = Compi.objects.all()
            serializer = Compi_CardsSerializer(compi, many=True, context={'request': request})
            return Response(serializer.data)


@api_view(['GET'])
def check_reg(request):
    if request.method == 'GET':
        try:
            user = get_user(request).google_id
            compi = get_compi(request)
            gotcha = compi_reg.objects.filter(google_id=user)
            # print(gotcha, 'gotcha it is')
            compi_exists = gotcha.filter(compi=compi).exists()
            # return Response(compi_exists)
        
            return Response(True)
        except:
            return Response(False)

# @csrf_exempt
# def compi_mail(request):



@api_view(['POST']) 
@csrf_exempt
def compi_reg_form(request):
    if request.method=='POST':
        compi_reg_serializer = Compi_RegSerializer(data=request.data, many=False)
        print(compi_reg_serializer)
        # print(compi_reg_serializer.is_valid())
        if compi_reg_serializer.is_valid():
            email = compi_reg_serializer.validated_data.get('email')
            compi = compi_reg_serializer.validated_data.get('compi')
            if compi_reg.objects.filter(email=email, compi=compi).exists():
                return JsonResponse({'error': 'A registration with this email for this compi already exists.'}, status=400)

            last_reg = compi_reg.objects.order_by('-tf_id').first()
            next_tf_id = '0269'
            if last_reg:
                last_tf_id = last_reg.tf_id[-4:]
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
            tf_id = f"TF-23{next_tf_id}"
            compi_reg_serializer.save(tf_id=tf_id)
            # compi_reg_serializer.save()
            subject = f"Techfest, IIT Bombay | Registration successful for {compi_reg_serializer.validated_data.get('compi')}"
            message = f"You have successfully registered for the {compi_reg_serializer.validated_data.get('compi')} with email {compi_reg_serializer.validated_data.get('email')} and name {compi_reg_serializer.validated_data.get('name')}.You must create or join a team to complete the registration procedure, or else you can click on Single Participant to compete alone."
            from_email = 'noreply@techfest.org'
            recipient_list = [compi_reg_serializer.validated_data.get('email')]
            send_mail(subject, message, from_email, recipient_list)
            return JsonResponse(compi_reg_serializer.data)
        res = {'success': False}
        # print(res)
        return JsonResponse(res)


def page(request):
    return render(request, 'index.html')


### For team

def team_reg_check(request):
    lead = request.team_leader_email
    pass


@api_view(['POST'])
@csrf_exempt
def create_team(request):
    if request.method=='POST':
        compi_team_serializer = Compi_TeamSerializer(data=request.data, many=False)
        if compi_team_serializer.is_valid():
            # if check_reg(compi_team_serializer) is 
            compi = compi_team_serializer.validated_data.get('compi_name')
            compi1 = str(compi).capitalize()
            compi_reg_instances = compi_reg.objects.filter(compi=compi)
            team_leader_email = compi_team_serializer.validated_data.get('team_leader_email')
            team_leader_name = compi_team_serializer.validated_data.get('team_leader_name')
            parti_email1 = compi_team_serializer.validated_data.get('parti1_email')
            parti_email2 = compi_team_serializer.validated_data.get('parti2_email')
            parti_email3 = compi_team_serializer.validated_data.get('parti3_email')
            print(request.data.get('parti1_email'))
            # if not compi_reg_instances.filter(email=compi_team_serializer.validated_data.get('team_leader_email')).exists():
            #     print(1)
            #     res = {'success': False, 'error': 'User not registered'}
            #     return JsonResponse(res, status=400)
            if parti_email1 and not compi_reg_instances.filter(email=request.data.get('parti1_email')).exists():
                print(2)
                res = {'success': False, 'error': 'User not registered'}
                return JsonResponse(res, status=400)
            if parti_email2 and not compi_reg_instances.filter(email=request.data.get('parti2_email')).exists():
                print(3)
                res = {'success': False, 'error': 'User not registered'}
                return JsonResponse(res, status=400)
            if parti_email3 and not compi_reg_instances.filter(email=prequest.data.get('parti1_email')).exists():
                print(4)
                res = {'success': False, 'error': 'User not registered'}
                return JsonResponse(res, status=400)
            latest_team = compi_team.objects.filter(compi_name=compi).order_by('-team_id').first()
            next_team_id = '0269'
            if latest_team:
                last_team_id = latest_team.team_id[-4:]
                next_team_id = str(int(last_team_id) + 1).zfill(4)
            team_id = f"{compi.name.capitalize()[:4]}-23{next_team_id}"
            compi_team_serializer.save(team_id=team_id)
            # compi_team_serializer.save()
            subject = f'Techfest, IIT Bombay | Creation of Team successful for {compi1}'
            message = f'You have successfully created your team with team leader {team_leader_name} and {team_id}. Kindly go through all the rules and FAQs carefully, and keep checking the website for regular updates.'
            send_mailer = 'noreply@techfest.org'
            recipient = [compi_team_serializer.validated_data.get('team_leader_email')]
            send_mail(subject, message, send_mailer, recipient)
            subject2 = f'Techfest, IIT Bombay | Added to {team_id} team for the {compi1} competition'
            message2 = f'You have been successfully added to the team for the {compi1} competition with team leader {team_leader_email} and {team_id}. Kindly go through all the rules and FAQs carefully, and keep checking the website for regular updates.'
            recipient2 = [compi_team_serializer.validated_data.get('parti1_email'), compi_team_serializer.validated_data.get('parti2_email'), compi_team_serializer.validated_data.get('parti3_email')]
            recipient2 = [email for email in recipient2 if email is not None]
            for rec in recipient2:
                send_mail(subject2, message2, send_mailer, [rec])
            return JsonResponse(compi_team_serializer.data)
        res = {'success': False}

        return JsonResponse(res)

@api_view(['POST'])
@csrf_exempt
def single_parti(request):
    if request.method == 'POST':
        compi_team_serializer = Compi_TeamSerializer(data=request.data, many=False)
        # print(compi_team_serializer.is_valid())
        if compi_team_serializer.is_valid():
            # if check_reg(compi_team_serializer) is 
            compi = compi_team_serializer.validated_data.get('compi_name')
            compi1 = str(compi).capitalize()
            compi_reg_instances = compi_reg.objects.filter(compi=compi)
            team_leader_email = compi_team_serializer.validated_data.get('team_leader_email')
            if not compi_reg_instances.filter(email=team_leader_email).exists():
                res = {'success': False, 'error': 'User not registered'}
                return JsonResponse(res)
            latest_team = compi_team.objects.filter(compi_name=compi).order_by('-team_id').first()
            next_team_id = '0269'
            if latest_team:
                last_team_id = latest_team.team_id[-4:]
                next_team_id = str(int(last_team_id) + 1).zfill(4)
            team_id = f"{compi.name.capitalize()[:4]}-23{next_team_id}"
            compi_team_serializer.save(team_id=team_id, single_parti=True)
            # compi_team_serializer.save()
            subject = f'Techfest, IIT Bombay | Creation of Team successful for {compi1}'
            message = f'You have successfully created your Unique ID in the {compi1} competition with email address {team_leader_email}'
            send_mailer = 'noreply@techfest.org'
            recipient = [compi_team_serializer.validated_data.get('team_leader_email')]
            send_mail(subject, message, send_mailer, recipient)
            return JsonResponse(compi_team_serializer.data)
        res = {'success': False}
        return JsonResponse(res)

@api_view(['PUT'])
@csrf_exempt
def join_team(request):
    if request.method == 'PUT':
        team_id = get_team_id(request)
        team = compi_team.objects.get(team_id=team_id)
        if team:
            parti_name = request.data['parti_name']
            parti_email = request.data['parti_email']
            compi = team.compi_name
            compi = str(compi).capitalize()
            if(team.single_parti==True):
                return JsonResponse({'success': False, 'message': 'Team is already full'})
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
            subject = f'Techfest, IIT Bombay | Joined the {team_id} team for the {compi} competition'
            message = f'You have successfully joined a team with {parti_email} for the competition {compi} with TeamID {team_id} and with the team leader ({team.team_leader_name}) with email {team.team_leader_email}'
            send_mailer = 'noreply@techfest.org'
            recipient = [parti_email]
            send_mail(subject, message, send_mailer, recipient)
            return JsonResponse(serializer.data)       
        # print(parti_email, parti_name)
        return JsonResponse({'success': False, 'message': 'Team not found'})

@api_view(['PUT'])
@csrf_exempt
def add_parti(request):
    if request.method == 'PUT':
        team_id = get_team_id(request)
        team = compi_team.objects.get(team_id=team_id)
        if team:
            parti_name = request.data['parti_name']
            parti_email = request.data['parti_email']
            leader_email = request.data['leader_email']
            compi = team.compi_name
            compi = str(compi).capitalize()
            if leader_email == team.team_leader_email:
                if(team.single_parti==True):
                    return JsonResponse({'success': False, 'message': 'Team is already full'})
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
                subject = f'Techfest, IIT Bombay | Added to {team_id} team for the {compi} competition'
                message = f'You have successfully joined a team {parti_email} with TeamID {team_id} and with {leader_email} ({team.team_leader_name}) as the team leader'
                send_mailer = 'noreply@techfest.org'
                recipient = [parti_email]
                send_mail(subject, message, send_mailer, recipient)
                return JsonResponse(serializer.data)       
        # print(parti_email, parti_name)
        return JsonResponse({'success': False, 'message': 'Team not found'})




@api_view(['PUT'])
@csrf_exempt
def leave_team(request):
    if request.method == 'PUT':
        team_id = get_team_id(request)
        # print(request.headers)
        team = compi_team.objects.get(team_id=team_id)
        if team:
            # parti_name = request.data['parti_name']
            compi = team.compi_name
            compi = str(compi).capitalize()
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
            subject = f'Techfest, IIT Bombay | Successfully left the team {team_id}'
            message = f'You have successfully left the team {parti_email} for the {compi} competition with TeamID {team_id} with leader ({team.team_leader_name}) and his mail {team.team_leader_email}. You can check our website for exploring other competitions'
            send_mailer = 'noreply@techfest.org'
            recipient = [parti_email]
            # print('yaha ka error')
            send_mail(subject, message, send_mailer, recipient)
            return JsonResponse(serializer.data)       
        
        return JsonResponse({'success': False, 'message': 'Team not found'})
    



@api_view(['DELETE'])
@csrf_exempt
def delete_team(request):
    # print('hi')
    if request.method == 'DELETE':
        team_id = get_team_id(request)
        # print(team_id)
        parti_email = request.data['parti_email']

        # print(request.data)
        # team = compi_team.objects.get(team_id=team_id)
        try:
            team = compi_team.objects.get(team_id=team_id, team_leader_email=parti_email)
            compi = team.compi_name
        except compi_team.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Team not found'})
        subject = f'Techfest, IIT Bombay | Dissolved the {team_id} team for the {compi} competition'
        message = f'The Team has been successfully dissolved with team id {team_id} and with the team leader name ({team.team_leader_name}) and his mail id {team.team_leader_email}. You can check our website for exploring other competitions.'
        send_mailer = 'noreply@techfest.org'
        recipient = [team.team_leader_email, team.parti1_email, team.parti2_email, team.parti3_email]
        recipient = [email for email in recipient if email is not None]
        send_mail(subject, message, send_mailer, recipient)
        team.delete()
        return JsonResponse({'success': True, 'message': 'Team deleted successfully'})


# Workshops     
@api_view(['GET'])
def workshop_card(request):
    if request.method == 'GET':
        try: 
            user = get_user_id(request)
            email = user.email if user else None
            workshop = Workshop.objects.all()
            serializer = WorkshopsSerializer(workshop, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            workshop = Workshop.objects.all()
            serializer = WorkshopsSerializer(workshop, many=True, context={'request': request})
            return Response(serializer.data)
        
@api_view(['POST']) 
@csrf_exempt
def workshop_reg_form(request):
    if request.method=='POST':
        workshop_reg_serializer = WorkshopRegSerializer(data=request.data, many=False)
        # print(workshop_reg_serializer)
        if workshop_reg_serializer.is_valid():
            last_reg = workshop_reg.objects.order_by('-tf_id').first()
            next_tf_id = '0269'
            if last_reg:
                last_tf_id = last_reg.tf_id[-4:]
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
            tf_id = f"TF-W23{next_tf_id}"
            workshop_reg_serializer.save(tf_id=tf_id)
            # compi_reg_serializer.save()
            subject = "Workshop Registration"
            message = f"You have successfully registered for the {workshop_reg_serializer.validated_data.get('workshop')} with email {workshop_reg_serializer.validated_data.get('email')} and name {workshop_reg_serializer.validated_data.get('name')}"
            from_email = 'noreply@techfest.org'
            recipient_list = [workshop_reg_serializer.validated_data.get('email')]
            send_mail(subject, message, from_email, recipient_list)
            return JsonResponse(workshop_reg_serializer.data)
        res = {'success': False}
        # print(res)
        return JsonResponse(res)
