from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from apis.serializers import *
from apis.models import *
from django.db import transaction
from django.db.models import Func, F, Value, CharField, IntegerField
from django.db.models.functions import Cast
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
import pandas as pd
from django.core.mail import send_mail, send_mass_mail
from django.conf import settings
from django.utils.html import format_html
from django.core.mail import EmailMessage


class NotifyView(APIView):
    def post(self, request):
        serializer = NotifyingSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def mail_bhejo1(request):
    subject = "IIT Bombay's International Fintech & Industry 4.0 Summit "
    message = """<html>
    <body>
        
        <p>Greetings from Techfest, IIT Bombay!</p> <p>With only 2 days to go for the 27th edition of Techfest, here's one of the highlights of the fest - The international summits. This is your opportunity to listen and interact directly with top industry leaders and gain useful insights, motivation and know about their journey towards success! Register at tehfest.org/summits</p>
        Here's some of our speakers: <br>
Kavitha Subramanian <strong>(Co-Founder, Upstox)</strong> <br>
Devie Mohan <strong>(Global top 10 Fintech Influencer)</strong>  	 <br>
Ashish Singhal <strong>(Co-Founder Coinswitch)</strong>  <br>
Nilesh Shah <strong>(Managing Director, Kotak Mutual Fund)</strong>  <br>
Padmaja Chunduru	<strong>(MD & CEO, NSDL)</strong>  <br>
Ram Kewalramani <strong>(Co-Founder & MD, CredAble)</strong>  <br>
Sonam Srivastava <strong>(Founder & CEO, Wright Research)</strong>  <br>
Anup Purohit <strong>(CIO, Wipro)</strong> </p>

<p><strong> Registrations open for limited time only!</strong>  <br>
*The event is free for attendees with accommodation inside IIT Bombay. In this case entry will be on FCFS basis.</p>
<p>
Venue: <strong> Ground Floor, Seminar Room 2, VMCC, IIT Bombay</strong>  <br>
Date: <strong> 26th & 27th December</strong>  <br>
Time: <strong> 10:30 AM onwards</strong>  </p> 
 <p>
 Warm Regards, <br>
Team Techfest 2023-24 </p>
        
    </html>
    """
    from_email = '27thedition@techfest.org'
    recipient = 'apshingeatharv@gmail.com'

    csv_file_path = '/home/yat251/Desktop/Coding/TF/TF23/backend/media/summit_mass1.csv'
    df = pd.read_csv(csv_file_path)
    recipient_list = df['Email'].dropna().tolist()

    for row in recipient_list:
        recipient = row
        email = EmailMessage(subject, message, from_email, [recipient])
        email.content_subtype = "html" 
        print(row)
        email.send()

    # email = EmailMessage(subject, message, from_email, [recipient])
    # # send_mail(subject, message, from_email, [recipient])
    # email.content_subtype = "html" 
    # email.send()
    return HttpResponse("Email sent successfully!")

def mail_bhejo2(request):
    subject = "IIT Bombay's International Fintech & Industry 4.0 Summit "
    message = """<html>
    <body>
        
        <p>Greetings from Techfest, IIT Bombay!</p> <p>With only 2 days to go for the 27th edition of Techfest, here's one of the highlights of the fest - The international summits. This is your opportunity to listen and interact directly with top industry leaders and gain useful insights, motivation and know about their journey towards success! Register at tehfest.org/summits</p>
        Here's some of our speakers: <br>
Kavitha Subramanian <strong>(Co-Founder, Upstox)</strong> <br>
Devie Mohan <strong>(Global top 10 Fintech Influencer)</strong>  	 <br>
Ashish Singhal <strong>(Co-Founder Coinswitch)</strong>  <br>
Nilesh Shah <strong>(Managing Director, Kotak Mutual Fund)</strong>  <br>
Padmaja Chunduru	<strong>(MD & CEO, NSDL)</strong>  <br>
Ram Kewalramani <strong>(Co-Founder & MD, CredAble)</strong>  <br>
Sonam Srivastava <strong>(Founder & CEO, Wright Research)</strong>  <br>
Anup Purohit <strong>(CIO, Wipro)</strong> </p>

<p><strong> Registrations open for limited time only!</strong>  <br>
*The event is free for attendees with accommodation inside IIT Bombay. In this case entry will be on FCFS basis.</p>
<p>
Venue: <strong> Ground Floor, Seminar Room 2, VMCC, IIT Bombay</strong>  <br>
Date: <strong> 26th & 27th December</strong>  <br>
Time: <strong> 10:30 AM onwards</strong>  </p> 
 <p>
 Warm Regards, <br>
Team Techfest 2023-24 </p>
        
    </html>
    """
    from_email = '27thedition@techfest.org'
    recipient = 'apshingeatharv@gmail.com'

    csv_file_path = '/home/yat251/Desktop/Coding/TF/TF23/backend/media/summit_mass2.csv'
    df = pd.read_csv(csv_file_path)
    recipient_list = df['Email'].dropna().tolist()

    for row in recipient_list:
        recipient = row
        email = EmailMessage(subject, message, from_email, [recipient])
        email.content_subtype = "html" 
        print(row)
        email.send()

    # email = EmailMessage(subject, message, from_email, [recipient])
    # # send_mail(subject, message, from_email, [recipient])
    # email.content_subtype = "html" 
    # email.send()
    return HttpResponse("Email sent successfully!")


def mail_bhejo3(request):
    subject = "IIT Bombay's International Fintech & Industry 4.0 Summit "
    message = """<html>
    <body>
        
        <p>Greetings from Techfest, IIT Bombay!</p> <p>With only 2 days to go for the 27th edition of Techfest, here's one of the highlights of the fest - The international summits. This is your opportunity to listen and interact directly with top industry leaders and gain useful insights, motivation and know about their journey towards success! Register at tehfest.org/summits</p>
        Here's some of our speakers: <br>
Kavitha Subramanian <strong>(Co-Founder, Upstox)</strong> <br>
Devie Mohan <strong>(Global top 10 Fintech Influencer)</strong>  	 <br>
Ashish Singhal <strong>(Co-Founder Coinswitch)</strong>  <br>
Nilesh Shah <strong>(Managing Director, Kotak Mutual Fund)</strong>  <br>
Padmaja Chunduru	<strong>(MD & CEO, NSDL)</strong>  <br>
Ram Kewalramani <strong>(Co-Founder & MD, CredAble)</strong>  <br>
Sonam Srivastava <strong>(Founder & CEO, Wright Research)</strong>  <br>
Anup Purohit <strong>(CIO, Wipro)</strong> </p>

<p><strong> Registrations open for limited time only!</strong>  <br>
*The event is free for attendees with accommodation inside IIT Bombay. In this case entry will be on FCFS basis.</p>
<p>
Venue: <strong> Ground Floor, Seminar Room 2, VMCC, IIT Bombay</strong>  <br>
Date: <strong> 26th & 27th December</strong>  <br>
Time: <strong> 10:30 AM onwards</strong>  </p> 
 <p>
 Warm Regards, <br>
Team Techfest 2023-24 </p>
        
    </html>
    """
    from_email = '27thedition@techfest.org'
    recipient = 'apshingeatharv@gmail.com'

    csv_file_path = '/home/yat251/Desktop/Coding/TF/TF23/backend/media/summit_mass3.csv'
    df = pd.read_csv(csv_file_path)
    recipient_list = df['Email'].dropna().tolist()

    for row in recipient_list:
        recipient = row
        email = EmailMessage(subject, message, from_email, [recipient])
        email.content_subtype = "html" 
        print(row)
        email.send()

    # email = EmailMessage(subject, message, from_email, [recipient])
    # # send_mail(subject, message, from_email, [recipient])
    # email.content_subtype = "html" 
    # email.send()
    return HttpResponse("Email sent successfully!")


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
        # print(email)
        users = compi_reg.objects.filter(email=email)
        if users.exists():
            for user in users:
                continue
        else:
            user = None
    except:
        user = None
    return email


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
            email = get_user_id(request)
            # email = user.email if user else None
            # print(email)
            compi = Compi.objects.all()
            serializer = Compi_CardsSerializer(
                compi, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            compi = Compi.objects.all()
            print(compi)
            serializer = Compi_CardsSerializer(
                compi, many=True, context={'request': request})
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
    if request.method == 'POST':
        sexy_word = request.data.get('sexy_word')
        compi_reg_serializer = Compi_RegSerializer(
            data=request.data, many=False)
        # print(compi_reg_serializer)
        # print(compi_reg_serializer.is_valid())
        if compi_reg_serializer.is_valid():
            # print('hello')
            email = compi_reg_serializer.validated_data.get('email')
            compi = compi_reg_serializer.validated_data.get('compi')
            phone = compi_reg_serializer.validated_data.get('phoneno')
            # print(sexy_word)
            sexy_word1 = f"{compi or ''}15Nov{email or ''}or19Nov{phone or ''}"
            # print(sexy_word1)
            if sexy_word != sexy_word1:
                # print(sexy_word, sexy_word1)
                return JsonResponse({'error': 'Failed'}, status=400)
            if compi_reg.objects.filter(email=email, compi=compi).exists():
                return JsonResponse({'error': 'A registration with this email for this compi already exists.'}, status=400)
            if compi_reg.objects.filter(tf_id='TF-2310000').exists():
                pass
            last_reg = compi_reg.objects.order_by('-id').first()
            next_tf_id = '0269'
            if last_reg:
                last_tf_id = last_reg.tf_id[-4:]
                print(last_tf_id)
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
                print(next_tf_id)
            tf_id = f"TF-23{next_tf_id}"
            compi_reg_serializer.save(tf_id=tf_id)
            # compi_reg_serializer.save()
            subject = f"Techfest, IIT Bombay | Registration successful for {compi_reg_serializer.validated_data.get('compi')}"
            message = f"Greetings from Techfest, IIT Bombay! \n You have been successfully registered in {compi_reg_serializer.validated_data.get('compi')} with {compi_reg_serializer.validated_data.get('email')} as your registered email address.\n Thanks and Regards, \n Team Techfest 2023-24"
            from_email = 'noreply@techfest.org'
            recipient_list = [compi_reg_serializer.validated_data.get('email')]
            try:
                send_mail(subject, message, from_email, recipient_list)
                return JsonResponse(compi_reg_serializer.data)
            except:
                return JsonResponse(compi_reg_serializer.data)
        res = {'success': False}
        # print(res)
        return JsonResponse(res)


def page(request):
    return render(request, 'index.html')


# For team

def team_reg_check(request):
    lead = request.team_leader_email
    pass


@api_view(['POST'])
@transaction.atomic
@csrf_exempt
def create_team(request):
    if request.method == 'POST':
        compi_team_serializer = Compi_TeamSerializer(
            data=request.data, many=False)
        # print(compi_team_serializer.is_valid())
        if compi_team_serializer.is_valid():
              # if check_reg(compi_team_serializer) is
            compi = compi_team_serializer.validated_data.get('compi_name')
            # compi1 = str(compi).capitalize()
            compi_reg_instances = compi_reg.objects.filter(compi=compi)

            emails_to_check = [
                'team_leader_email', 'parti1_email', 'parti2_email', 'parti3_email'
            ]
            for email_field in emails_to_check:
                email_value = request.data.get(email_field)
                # if email_value and not compi_reg_instances.filter(email=email_value).exists():
                #     res = {'success': False, 'error': 'User not registered'}
                #     return JsonResponse(res, status=400)

            team_leader_email = compi_team_serializer.validated_data.get(
                'team_leader_email')
            if compi_team.objects.filter(team_leader_email=team_leader_email, compi_name=compi).exists():
                res = {'success': False, 'error': 'Team already formed'}
                return JsonResponse(res, status=400)
                
            latest_team = compi_team.objects.filter(
                compi_name=compi).order_by('-team_id').first()
            next_team_id = '0269'
            if latest_team:
                last_team_id = latest_team.team_id[-4:]
                next_team_id = str(int(last_team_id) + 1).zfill(4)

            # print([ord(char) for char in compi])
            lol = ['robosumo', 'robosoccer', 'roborace']
                        
            print(lol[0])
            compi_str = str(compi)
            if compi_str == lol[0]:
                print('hi')
                team_id = f"RoboS-23{next_team_id}"
            elif compi_str == 'robosoccer':
                team_id = f"RoboF-23{next_team_id}"
            elif compi_str == 'roborace':
                team_id = f"RoboR-23{next_team_id}"
            else:
                print('ji')
                team_id = f"{compi.name.capitalize()[:4]}-23{next_team_id}"

            compi_team_serializer.save(team_id=team_id)

            # compi_team_serializer.save()
            subject_team_leader = f'Techfest, IIT Bombay | Creation of Team successful for {compi.name.capitalize()}'
            message_team_leader = f'You have successfully created your team with team leader {compi_team_serializer.validated_data.get("team_leader_name")} and {team_id}. Kindly go through all the rules and FAQs carefully, and keep checking the website for regular updates.'
            recipient_team_leader = [team_leader_email]
            send_mail(subject_team_leader, message_team_leader, 'noreply@techfest.org', recipient_team_leader)

            subject_participants = f'Techfest, IIT Bombay | Added to {team_id} team for the {compi.name.capitalize()} competition'
            message_participants = f'You have been successfully added to the team for the {compi.name.capitalize()} competition with team leader {team_leader_email} and {team_id}. Kindly go through all the rules and FAQs carefully, and keep checking the website for regular updates.'
            recipients_participants = [request.data.get('parti1_email'), request.data.get('parti2_email'), request.data.get('parti3_email')]
            recipients_participants = [email for email in recipients_participants if email is not None]
            send_mail(subject_participants, message_participants, 'noreply@techfest.org', recipients_participants)

            return JsonResponse(compi_team_serializer.data)
        
        res = {'success': False}
        return JsonResponse(res, status=400)


@api_view(['POST'])
@csrf_exempt
def single_parti(request):
    if request.method == 'POST':
        compi_team_serializer = Compi_TeamSerializer(
            data=request.data, many=False)
        # print(compi_team_serializer.is_valid())
        if compi_team_serializer.is_valid():
            # if check_reg(compi_team_serializer) is
            compi = compi_team_serializer.validated_data.get('compi_name')
            compi1 = str(compi).capitalize()
            compi_reg_instances = compi_reg.objects.filter(compi=compi)
            team_leader_email = compi_team_serializer.validated_data.get(
                'team_leader_email')
            if not compi_reg_instances.filter(email=team_leader_email).exists():
                res = {'success': False, 'error': 'User not registered'}
                return JsonResponse(res)
            latest_team = compi_team.objects.filter(
                compi_name=compi).order_by('-team_id').first()
            next_team_id = '0269'
            if latest_team:
                last_team_id = latest_team.team_id[-4:]
                next_team_id = str(int(last_team_id) + 1).zfill(4)

            compi_str = str(compi)
            if compi_str == 'robosumo':
                print('hi')
                team_id = f"RoboS-23{next_team_id}"
            elif compi_str == 'robosoccer':
                team_id = f"RoboF-23{next_team_id}"
            elif compi_str == 'roborace':
                team_id = f"RoboR-23{next_team_id}"
            else:
                print('ji')
                team_id = f"{compi.name.capitalize()[:4]}-23{next_team_id}"

            # team_id = f"{compi.name.capitalize()[:4]}-23{next_team_id}"
            compi_team_serializer.save(team_id=team_id, single_parti=True)
            # compi_team_serializer.save()
            subject = f'Techfest, IIT Bombay | Creation of Team successful for {compi1}'
            message = f'You have successfully created your Unique ID {team_id} in the {compi1} competition with email address {team_leader_email}'
            send_mailer = 'noreply@techfest.org'
            recipient = [compi_team_serializer.validated_data.get(
                'team_leader_email')]
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
            if (team.single_parti == True):
                return JsonResponse({'success': False, 'message': 'Team is already full'})
            if (team.parti1_email == parti_email or
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
                if (team.single_parti == True):
                    return JsonResponse({'success': False, 'message': 'Team is already full'})
                if (team.parti1_email == parti_email or
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
            team = compi_team.objects.get(
                team_id=team_id, team_leader_email=parti_email)
            compi = team.compi_name
        except compi_team.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Team not found'})
        subject = f'Techfest, IIT Bombay | Dissolved the {team_id} team for the {compi} competition'
        message = f'The Team has been successfully dissolved with team id {team_id} and with the team leader name ({team.team_leader_name}) and his mail id {team.team_leader_email}. You can check our website for exploring other competitions.'
        send_mailer = 'noreply@techfest.org'
        recipient = [team.team_leader_email, team.parti1_email,
                     team.parti2_email, team.parti3_email]
        recipient = [email for email in recipient if email is not None]
        send_mail(subject, message, send_mailer, recipient)
        team.delete()
        return JsonResponse({'success': True, 'message': 'Team deleted successfully'})


# Workshops
@api_view(['GET'])
def workshop_card(request):
    if request.method == 'GET':
        try:
            email = get_user_id(request)
            # email = user.email if user else None
            workshop = Workshop.objects.all()
            serializer = WorkshopsSerializer(
                workshop, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            workshop = Workshop.objects.all()
            serializer = WorkshopsSerializer(
                workshop, many=True, context={'request': request})
            return Response(serializer.data)


@api_view(['POST'])
@csrf_exempt
def workshop_reg_form(request):
    if request.method == 'POST':
        sexy_word = request.data.get('sexy_word')
        workshop_reg_serializer = WorkshopRegSerializer(
            data=request.data, many=False)
        # print(workshop_reg_serializer)
        if workshop_reg_serializer.is_valid():
            email = workshop_reg_serializer.validated_data.get('email')
            workshop = workshop_reg_serializer.validated_data.get('workshop')
            if Workshop.objects.filter(name=workshop, closed=True).exists():
                return JsonResponse({'error': 'Workshop is closed'}, status=400)
            phone = workshop_reg_serializer.validated_data.get('phoneno')
            # print(sexy_word)
            sexy_word1 = f"{workshop or ''}15Novlolol{email or ''}or19Nov{phone or ''}"
            # print(sexy_word1)
            if sexy_word != sexy_word1:
                # print(sexy_word, sexy_word1)
                return JsonResponse({'error': 'Failed'}, status=400)
            if workshop_reg.objects.filter(email=email, workshop=workshop).exists():
                return JsonResponse({'error': 'A registration with this email for this workshop already exists.'}, status=400)
            last_reg = workshop_reg.objects.order_by('-worksho_id').first()
            next_tf_id = '3369'
            if last_reg:
                last_tf_id = last_reg.worksho_id[-4:]
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
            worksho_id = f"TF-W23{next_tf_id}"
            workshop_reg_serializer.save(worksho_id=worksho_id)
            # payment = Workshop.objects.filter(name=workshop).values('paymentLink')
            payment = Workshop.objects.get(name=workshop).paymentLink
            # compi_reg_serializer.save()
            subject = "Workshop Registration"
            message = f"You have successfully registered for the {workshop_reg_serializer.validated_data.get('workshop')} with email {workshop_reg_serializer.validated_data.get('email')} and name {workshop_reg_serializer.validated_data.get('name')}"
            message = f"Greetings from Techfest, IIT Bombay! \n You have been successfully registered in {workshop_reg_serializer.validated_data.get('workshop')} Workshop with {workshop_reg_serializer.validated_data.get('email')} as your registered email address. Click here to complete the payment procedure: {payment}. \nThe workshop will be conducted on the Campus of IIT Bombay. By completing the payment, your workshop will be booked and you will get FREE access pass to all events at Techfest including EDM Night, International Robowars, Guest Lectures, International Exhibitions, Summits, VR and Gaming Setups. \nParticipants can book accommodation inside IIT Bombay campus at techfest.org/accommodation\nThanks and Regards,\nTeam Techfest 2023-24"
            from_email = 'noreply@techfest.org'
            recipient_list = [
                workshop_reg_serializer.validated_data.get('email')]
            try:
                send_mail(subject, message, from_email, recipient_list)
                return JsonResponse(workshop_reg_serializer.data)
            except:
                return JsonResponse(workshop_reg_serializer.data)
        res = {'success': False}
        # print(res)
        return JsonResponse(res)


# Robowars
@api_view(['GET'])
def robowar_card(request):
    if request.method == 'GET':
        try:
            email = get_user_id(request)
            # email = user.email if user else None
            robowar = Robowars.objects.all()
            serializer = RobowarsSerializer(
                robowar, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            robowar = Robowars.objects.all()
            serializer = RobowarsSerializer(
                robowar, many=True, context={'request': request})
            return Response(serializer.data)


@api_view(['POST'])
def robowars_reg_form(request):
    if request.method == 'POST':
        robowars_reg_serializer = RobowarsRegSerializer(
            data=request.data, many=False)
        print(robowars_reg_serializer.is_valid())
        if robowars_reg_serializer.is_valid():
            category = robowars_reg_serializer.validated_data.get('category')
            team_leader_email = robowars_reg_serializer.validated_data.get(
                'team_leader_email')
            team_leader_name = robowars_reg_serializer.validated_data.get(
                'team_leader_name')
            parti_email1 = robowars_reg_serializer.validated_data.get(
                'parti1_email')
            parti_email2 = robowars_reg_serializer.validated_data.get(
                'parti2_email')
            parti_email3 = robowars_reg_serializer.validated_data.get(
                'parti3_email')
            if robowar_reg.objects.filter(team_leader_email=team_leader_email, category=category).exists():
                res = {'success': False, 'error': 'Team already formed'}
                return JsonResponse(res, status=400)
            elif parti_email1 and robowar_reg.objects.filter(parti1_email=parti_email1, category=category).exists():
                res = {'success': False, 'error': 'Team already formed'}
                return JsonResponse(res, status=400)
            elif parti_email2 and robowar_reg.objects.filter(parti2_email=parti_email2, category=category).exists():
                res = {'success': False, 'error': 'Team already formed'}
                return JsonResponse(res, status=400)
            elif parti_email3 and robowar_reg.objects.filter(parti3_email=parti_email3, category=category).exists():
                res = {'success': False, 'error': 'Team already formed'}
                return JsonResponse(res, status=400)
            else:
                last_reg = robowar_reg.objects.order_by('-robowar_id').first()
                next_tf_id = '0269'
                if last_reg:
                    last_tf_id = last_reg.robowar_id[-4:]
                    next_tf_id = str(int(last_tf_id) + 1).zfill(4)
                robowar_id = f"TF-R23{next_tf_id}"
                print('hello')
                robowars_reg_serializer.save(robowar_id=robowar_id)
                res = {'success': True}
                try:
                    subject = f'Techfest, IIT Bombay | Successful Registration for International Robowars'
                    message = f"You have successfully registered for the Int'l Robowars with {team_leader_email}. Your TeamID is {robowar_id} and with the team leader {team_leader_name}"
                    # print(team_leader_email, team_leader_name, robowar_id)
                    from_email = 'noreply@techfest.org'
                    recipeint_list = [team_leader_email]
                    send_mail(subject, message, from_email, recipeint_list)
                except:
                    res = {'sucess no mail': True}
                return JsonResponse(res)
        res = {'success': False}
        return JsonResponse(res)
    

@api_view(['POST'])
def sustain_reg_test(request):
    if request.method == 'POST':
        sustain_reg_test_serializer = RobowarsRegSerializer(
            data=request.data, many=False)
        print(sustain_reg_test_serializer.is_valid())
        if sustain_reg_test_serializer.is_valid():
                sustain_reg_test_serializer.save()
                res = {'success': True}
                return JsonResponse(res)
        res = {'success': False}
        return JsonResponse(res)
    
@api_view(['POST'])
def sustain_reg_webinar(request):
    if request.method == 'POST':
        sustain_reg_webinar_serializer = RobowarsRegSerializer(
            data=request.data, many=False)
        print(sustain_reg_webinar_serializer.is_valid())
        if sustain_reg_webinar_serializer.is_valid():
                sustain_reg_webinar_serializer.save()
                res = {'success': True}
                return JsonResponse(res)
        res = {'success': False}
        return JsonResponse(res)

@api_view(['POST'])
def acco_reg(request):
    if request.method == 'POST':
        sexy_word = request.data.get('sexy_word')
        acco_reg_serializer = AccoRegSerializer(data=request.data, many=False)
        # print(acco_reg_serializer)
        if acco_reg_serializer.is_valid():
            name = acco_reg_serializer.validated_data.get('name')
            email = acco_reg_serializer.validated_data.get('email')
            phone = acco_reg_serializer.validated_data.get('phone')
            sexy_word1 = f"{name or ''}15Novlala{email or ''}or19Nov{phone or ''}"
            if sexy_word != sexy_word1:
                return JsonResponse({'error': 'Failed'}, status=400)
            try:
                if AccoReg.objects.filter(email=email).exists():
                    return JsonResponse({'error': 'A registration with this email for this workshop already exists.'}, status=400)
            except:
                pass
            last_reg = AccoReg.objects.order_by('-acco_id').first()
            next_tf_id = '0269'
            if last_reg:
                last_tf_id = last_reg.acco_id[-4:]
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
            acco_id = f"TF-AC23{next_tf_id}"
            acco_reg_serializer.save(acco_id=acco_id)
            # compi_reg_serializer.save()
            url = "https://www.meraevents.com/event/accommodation-at-iit-bombay-during-techfest-2023-24"
            subject = "Accomodation Registration"
            message = f"You have successfully registered for the Accomodation with email {acco_reg_serializer.validated_data.get('email')} and name {acco_reg_serializer.validated_data.get('name')}"
            message = f"Greetings from Techfest, IIT Bombay! \n You have been successfully registered in Accomodation with {acco_reg_serializer.validated_data.get('email')} as your registered email address. Click here: {url} to complete the payment procedure. The workshop will be conducted on the Campus of IIT Bombay, and by being part of the workshop, participants will get free access to IIT Bombay and can attend all the events of Techfest. Register for more Workshops at techfest.org/workshops \nThanks and Regards,\nTeam Techfest 2023-24"
            from_email = 'noreply@techfest.org'
            try:
                send_mail(subject, message, from_email, [
                        acco_reg_serializer.validated_data.get('email')])
                print('with mail')
                return JsonResponse(acco_reg_serializer.data)
            except:
                print('without mail')
                return JsonResponse(acco_reg_serializer.data)
        res = {'success': False}
        return JsonResponse(res)


@api_view(['PUT'])
def proof_upload(request):
    if request.method == 'PUT':
        email = request.data['email']
        acco = AccoReg.objects.get(email=email)
        if acco:
            acco.proof = request.data['proof']
            acco.save()
            return JsonResponse({'success': True})
        return JsonResponse({'success': False})
    

@api_view(['GET'])
def summitSpeaker(request):
    if request.method == "GET":
        try:
            email = get_user_id(request)
            summitSpeaker = SummitSpeaker.objects.all()
            serializer = SummitSpeakerSerializer(
                summitSpeaker, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            summitSpeaker = SummitSpeaker.objects.all()
            serializer = SummitSpeakerSerializer(
                summitSpeaker, many=True, context={'request': request})
            return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
def summitRegForm(request):
    if request.method == 'POST':
        
        sexy_word = request.data.get('sexy_word')
        serializer = SummitRegSerializer(
            data=request.data, many=False)
        # if(serializer.is_valid()):
        #     print('hi')
        # else:
        #     print(serializer.errors)
        if serializer.is_valid():
            # print(serializer)
            
            email = serializer.validated_data.get('email')
            summitisho = serializer.validated_data.get('summitisho')
            phone = serializer.validated_data.get('phoneno')
            # print(sexy_word)
            # print(summitisho)
            mahito = 'Fintech Summit'
            if(summitisho == mahito):
                summitosh = 1
            else:
                # print(summitisho)
                summitosh = 1
            sexy_word1 = f"{summitosh or ''}30Novlalaland{email or ''}or19NovWeLose{phone or ''}"
            # print(sexy_word1)
            # if sexy_word != sexy_word1:
            #     # print(sexy_word, sexy_word1)
            #     print('hi')
            #     return JsonResponse({'error': 'Failed'}, status=400)
            if SummitReg.objects.filter(email=email, summitisho=summitisho).exists():
                return JsonResponse({'error': 'A registration with this email for this workshop already exists.'}, status=400)
            last_reg = SummitReg.objects.order_by('-summit_id').first()
            next_tf_id = '3369'
            if last_reg:
                last_tf_id = last_reg.summit_id[-4:]
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
            summit_id = f"TF-S23{next_tf_id}"
            serializer.save(summit_id=summit_id)
            # compi_reg_serializer.save()
            subject = "Successful Intl'Summit Registration"
            message = f"You have successfully registered for the {serializer.validated_data.get('summit')} with email {serializer.validated_data.get('email')} and name {serializer.validated_data.get('name')}"
            # message = f"Greetings from Techfest, IIT Bombay! \n You have been successfully registered in {serializer.validated_data.get('summit')} Workshop with {serializer.validated_data.get('email')} as your registered email address. Click here to complete the payment procedure. The workshop will be conducted on the Campus of IIT Bombay, and by being part of the workshop, participants will get free access to IIT Bombay and can attend all the events of Techfest. \nThanks and Regards,\nTeam Techfest 2023-24"
            from_email = 'noreply@techfest.org'
            recipient_list = [
                serializer.validated_data.get('email')]
            try:
                send_mail(subject, message, from_email, recipient_list)
                return JsonResponse(serializer.data)
            except:
                print('hi')
                return JsonResponse(serializer.data)
        res = {'success': False}
        # print(res)
        return JsonResponse(res)
    
@api_view(['GET'])
def summits(request):
    if request.method == 'GET':
        try:
            email = get_user_id(request)
            # email = user.email if user else None
            summit = Summits.objects.all()
            serializer = SummitsSerializer(
                summit, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            summit = Summits.objects.all()
            serializer = SummitsSerializer(
                summit, many=True, context={'request': request})
            return Response(serializer.data)

@api_view(['GET'])
def ift(request):
    if request.method == 'GET':
        try: 
            email = get_user_id(request)
            ift = IFT.objects.all()
            serializer = IFTSerializer(
                ift, many=True, context={'user': email})
            return Response(serializer.data)
        except:
            ift = IFT.objects.all()
            serializer = IFTSerializer(
                ift, many=True, context={'request': request})
            return Response(serializer.data)
        
@api_view(['POST'])
def iftReg(request):
    if request.method == 'POST':
        sexy_word = request.data.get('sexy_word')
        serializer = IFTRegSerializer(
            data=request.data, many=False)
        print(serializer.is_valid())
        if serializer.is_valid():
            name = serializer.validated_data.get('driver_name')
            email = serializer.validated_data.get('driver_email')
            phone = serializer.validated_data.get('driver_phone')
            category = serializer.validated_data.get('category')
            sexy_word1 = f"{name or ''}MereMehboob{email or ''}orKissiOrKe{phone or ''}"
            if sexy_word != sexy_word1:
                return JsonResponse({'error': 'Failed'}, status=400)
            if IFTReg.objects.filter(driver_email=email, category=category).exists() or IFTReg.objects.filter(pit_email=email, category=category).exists():
                return JsonResponse({'error': 'A registration with this email for this category already exists.'}, status=400)
            last_reg = IFTReg.objects.order_by('-id').first()
            next_tf_id = '3369'
            if last_reg:
                last_tf_id = last_reg.id
                next_tf_id = str(int(last_tf_id) + 1).zfill(4)
            id = f"TF-IFT23{next_tf_id}"
            serializer.save(tf_id=id)
            subject = "IFT Registration"
            message = f"Greetings from Techfest, IIT Bombay! \nYou have successfully registered for the {category} with email {email} and name {name}, and {serializer.validated_data.get('pit_email')} and name {serializer.validated_data.get('pit_name')}\nThanks and Regards,\nTeam Techfest 2023-2"
            from_email = 'noreply@techfest.org'
            try:
                send_mail(subject, message, from_email, [email, serializer.validated_data.get('pit_email')])
                return JsonResponse(serializer.data)
            except:
                return JsonResponse(serializer.data)
        res = {'success': False}
        return JsonResponse(res)
    
@api_view(['GET'])
def faces(request):
    if request.method == 'GET':
        faces = Faces.objects.all()
        serializer = FacesSerializer(faces, many=True)
        print(serializer.data)
        return Response(serializer.data)
    

@api_view(['POST'])
def appdata(request):
    if request.method == 'POST':
        serializers = AppDataSerializer(data=request.data, many=False)
        if serializers.is_valid():
            # email&&name
            serializers.save()
            return JsonResponse({'success': True}, status=200)
        return JsonResponse({'error': True, 'detail': serializers.errors}, status=404)