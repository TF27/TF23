import base64
from ctypes.wintypes import RGB
from re import template
from unittest import result
from wsgiref.util import request_uri
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseNotFound,HttpResponseRedirect
from .models import *
from rest_framework import viewsets
# from .serializers import TeamSerializer
from django.conf import settings
from qrcode import *
import time
from PIL import Image, ImageFont,ImageDraw
import pandas as pd
from io import BytesIO
import hashlib
from django.urls import reverse
from django.contrib.auth.models import User
import os
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

def certificate_gen(request,id,key):
    # The size of the template MUST be 1600x1000
    # The positions and width of the space for name, competition name and rank MUST be the same
    if request.method == 'GET':
        random_text='a3749bc827f39e0089c090898da'
        test_key = random_text + str(id)
        test_key = hashlib.md5(test_key.encode()).hexdigest()
        if test_key!=key:
            return HttpResponseNotFound('<h1>Error 404 </br> Page not found</h1>')
        student = UserData.objects.get(id=id)
        image = CertificateImage.objects.get(image_id=student.image_id)
        temp = Image.open(image.template.path)
        template = temp.resize((1600,1000))
        name = student.student_name
        comp_name = student.competition_name
        rank=student.rank
        url = request.build_absolute_uri(request.path)
        font_size = 45
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
        image_editable = ImageDraw.Draw(template)
        img_width,img_height = template.size
        _, _, w_comp_name, h_comp_name = image_editable.textbbox((0, 0), comp_name, font=font)
        while w_comp_name>image.comp_w:
            font_size-=1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
            _, _, w_comp_name, h_comp_name = image_editable.textbbox((0, 0), comp_name, font=font)
        _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        while w_name>image.name_w:
            font_size-=1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
            _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        _, _, w_rank, h_rank = image_editable.textbbox((0, 0), rank, font=font)
        while w_rank>image.rank_w:
            font_size-=1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
            _, _, w_rank, h_rank = image_editable.textbbox((0, 0), rank, font=font)
        image_editable.text((image.name_x-w_name//2,image.name_y-h_name//2),name,(50,25,53),font=font)
        image_editable.text((image.rank_x-w_rank//2,image.rank_y-h_rank//2),rank,(50,25,53),font=font)
        image_editable.text((image.comp_x-w_comp_name//2,image.comp_y-h_comp_name//2),comp_name,(50,22,50),font=font)
        buffer = BytesIO()
        qr_img = make(url)
        qr = qr_img.resize((int(275*image.qr_scale),int(275*image.qr_scale)))
        qr_width,qr_height = qr.size
        result = Image.new(mode='RGB',size=(img_width,img_height),color='white')
        result.paste(template,(0,0))
        result.paste(qr,(image.qr_x-qr_width//2,image.qr_y-qr_height//2))
        result.save(buffer,'png')
        img_str =  base64.b64encode(buffer.getvalue()).decode('utf-8')
        return render(request, 'certificate/certificate_template.html', {'img_name': img_str,'id':id,'key':key})
    return render(request, 'certificate/certificate_template.html')

def download(request,id,key):
    # The size of the template MUST be 1600x1000
    # The positions and width of the space for name, competition name and rank MUST be the same
    if request.method == 'GET':
        random_text='a3749bc827f39e0089c090898da'
        test_key = random_text + str(id)
        test_key = hashlib.md5(test_key.encode()).hexdigest()
        if test_key!=key:
            return HttpResponseNotFound('<h1>Error 404 </br> Page not found</h1>')
        student = UserData.objects.get(id=id)
        image = CertificateImage.objects.get(image_id=student.image_id)
        temp = Image.open(image.template.path)
        template = temp.resize((1600,1000))
        name = student.student_name
        comp_name = student.competition_name
        rank=student.rank
        url = request.build_absolute_uri(request.path)
        font_size = 45
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
        image_editable = ImageDraw.Draw(template)
        img_width,img_height = template.size
        _, _, w_comp_name, h_comp_name = image_editable.textbbox((0, 0), comp_name, font=font)
        while w_comp_name>image.comp_w:
            font_size-=1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
            _, _, w_comp_name, h_comp_name = image_editable.textbbox((0, 0), comp_name, font=font)
        _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        while w_name>image.name_w:
            font_size-=1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
            _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        _, _, w_rank, h_rank = image_editable.textbbox((0, 0), rank, font=font)
        while w_rank>image.rank_w:
            font_size-=1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
            _, _, w_rank, h_rank = image_editable.textbbox((0, 0), rank, font=font)
        image_editable.text((image.name_x-w_name//2,image.name_y-h_name//2),name,(50,25,53),font=font)
        image_editable.text((image.rank_x-w_rank//2,image.rank_y-h_rank//2),rank,(50,25,53),font=font)
        image_editable.text((image.comp_x-w_comp_name//2,image.comp_y-h_comp_name//2),comp_name,(50,22,50),font=font)
        qr_img = make(url)
        qr = qr_img.resize((int(275*image.qr_scale),int(275*image.qr_scale)))
        qr_width,qr_height = qr.size
        result = Image.new(mode='RGB',size=(img_width,img_height),color='white')
        result.paste(template,(0,0))
        result.paste(qr,(image.qr_x-qr_width//2,image.qr_y-qr_height//2))
        response = HttpResponse(content_type='image/png')
        result.save(response, 'png')
        response['Content-Disposition'] = 'attachment; filename={0}'.format("Export.png")
        return response

def ca_download(request,id,key):
    # The size of the template MUST be 1600x1000
    # The positions and width of the space for name, competition name and rank MUST be the same
    if request.method == 'GET':
        random_text='a3749bc827f39e0089c090898da'
        test_key = random_text + str(id)
        test_key = hashlib.md5(test_key.encode()).hexdigest()
        if test_key!=key:
            return HttpResponseNotFound('<h1>Error 404 </br> Page not found</h1>')
        student = CaData.objects.get(id=id)
        image = LetterImage.objects.get(image_id=student.image_id)
        temp = Image.open(image.template.path)
        template = temp.resize((595, 842))
        name = student.student_name
        ca_id = student.ca_id
        url = request.build_absolute_uri(request.path)
        font_size = 12
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
        image_editable = ImageDraw.Draw(template)
        img_width,img_height = template.size
        image_editable.text((104,199),name,(50,25,53),font=font)
        image_editable.text((120,215),ca_id,(50,25,53),font=font)
        qr_img = make(url)
        qr = qr_img.resize((100,100))
        result = Image.new(mode='RGB',size=(img_width,img_height),color='white')
        result.paste(template,(0,0))
        result.paste(qr,(450,650))
        final = ImageReader(result)
        response = HttpResponse(content_type='application/pdf')
        p = canvas.Canvas(response)
        p.drawImage(final, 0, 0)
        p.showPage()
        p.save()
        return response

def upload_csv(request):
    if request.method == 'GET':
        return render(request,'certificate/certificate_login.html')
    elif request.method == 'POST':
        if 'login' in request.POST:
            users = User.objects.filter(username=request.POST['user'])
            if len(users)==0:
                return render(request,'certificate/certificate_login.html')
            user = users[0]
            if not user.check_password(request.POST['password']):
                return render(request,'certificate/certificate_login.html')
            if not user.is_staff:
                return render(request,'certificate/certificate_login.html')
            return render(request,'certificate/certificate_list.html',{'not_uploaded':True,'password':request.POST['password'],'user':user.username})
        else:
            users = User.objects.filter(username=request.POST['user'])
            if len(users)==0:
                return render(request,'certificate/certificate_login.html')
            user = users[0]
            if not user.check_password(request.POST['password']):
                return render(request,'certificate/certificate_login.html')
            if not user.is_staff:
                return render(request,'certificate/certificate_login.html')
            csv_file = request.FILES["csv_file"]
            data = pd.read_csv(csv_file)
            index_length = len(UserData.objects.all())
            data['certificate_link']=''
            for i in range(len(data['certificate_link'])):
                user = UserData(student_name=data['student_name'][i],rank=data['rank'][i],competition_name=data['competition_name'][i],image_id=data['image_id'][i])
                user.save()
                index_length+=1
                data['certificate_link'][i]=request.build_absolute_uri(reverse('cert',kwargs={'id':str(index_length),'key':hashlib.md5(('a3749bc827f39e0089c090898da'+str(index_length)).encode()).hexdigest()}))
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename=certificate_links.csv'
            data.to_csv(path_or_buf=response,sep=',',float_format='%.2f',index=False,decimal=",")
            return response

def ca_upload_csv(request):
    if request.method == 'GET':
        return render(request,'certificate/letter_login.html')
    elif request.method == 'POST':
        if 'login' in request.POST:
            users = User.objects.filter(username=request.POST['user'])
            if len(users)==0:
                return render(request,'certificate/letter_login.html')
            user = users[0]
            if not user.check_password(request.POST['password']):
                return render(request,'certificate/letter_login.html')
            if not user.is_staff:
                return render(request,'certificate/letter_login.html')
            return render(request,'certificate/letter_list.html',{'not_uploaded':True,'password':request.POST['password'],'user':user.username})
        else:
            users = User.objects.filter(username=request.POST['user'])
            if len(users)==0:
                return render(request,'certificate/letter_login.html')
            user = users[0]
            if not user.check_password(request.POST['password']):
                return render(request,'certificate/letter_login.html')
            if not user.is_staff:
                return render(request,'certificate/letter_login.html')
            csv_file = request.FILES["csv_file"]
            data = pd.read_csv(csv_file)
            index_length = len(UserData.objects.all())
            data['letter_link']=''
            for i in range(len(data['letter_link'])):
                user = CaData(student_name=data['student_name'][i],ca_id=data['ca_id'][i],image_id=data['image_id'][i])
                user.save()
                index_length+=1
                data['letter_link'][i]=request.build_absolute_uri(reverse('ca_letter',kwargs={'id':str(index_length),'key':hashlib.md5(('a3749bc827f39e0089c090898da'+str(index_length)).encode()).hexdigest()}))
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename=letter_links.csv'
            data.to_csv(path_or_buf=response,sep=',',float_format='%.2f',index=False,decimal=",")
            return response

def ticket(request,id,key):
    # The size of the template MUST be 1600x1000
    # The positions and width of the space for name, competition name and rank MUST be the same
    if request.method == 'GET':
        random_text = 'a3749bc827f39e0089c090898da'
        test_key = random_text + str(id)
        test_key = hashlib.md5(test_key.encode()).hexdigest()
        if test_key != key:
            return HttpResponseNotFound('<h1>Error 404 </br> Page not found</h1>')
        ticket = Ticket.objects.get(id=id)
        template = Image.open(os.path.join(settings.MEDIA_ROOT, "website ticket.png"))
        name = ticket.name
        email = ticket.email
        font_size = 47
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), font_size)
        image_editable = ImageDraw.Draw(template)
        _, _, w_email, h_email = image_editable.textbbox((0, 0), email, font=font)
        while w_email > 750:
            font_size -= 1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), font_size)
            _, _, w_email, h_email = image_editable.textbbox((0, 0), email, font=font)
        _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        while w_name > 900:
            font_size -= 1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), font_size)
            _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        image_editable.text((750, 198), name, (255, 255, 255), font=font)
        image_editable.text((910, 252), email, (255, 255, 255), font=font)
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), 30)
        image_editable.text((105, 420), 'TF-'+str(26161800+ticket.id), (255, 255, 255), font=font)
        qr_img = make(request.build_absolute_uri(request.path))
        qr = qr_img.resize((250, 250))
        img_width, img_height = template.size
        result = Image.new(mode='RGB', size=(img_width, img_height), color='white')
        result.paste(template, (0, 0))
        result.paste(qr, (80, 150))
        buffer = BytesIO()
        result.save(buffer,'png')
        img_str =  base64.b64encode(buffer.getvalue()).decode('utf-8')
        return render(request, 'certificate/ticket-template.html', {'img_name': img_str,'id':id,'key':key})
    return render(request, 'certificate/ticket-template.html')

def ticket_download(request,id,key):
    if request.method == 'GET':
        random_text = 'a3749bc827f39e0089c090898da'
        test_key = random_text + str(id)
        test_key = hashlib.md5(test_key.encode()).hexdigest()
        if test_key != key:
            return HttpResponseNotFound('<h1>Error 404 </br> Page not found</h1>')
        ticket = Ticket.objects.get(id=id)
        template = Image.open(os.path.join(settings.MEDIA_ROOT,"website ticket.png"))
        name = ticket.name
        email = ticket.email
        font_size = 47
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT,"arial.ttf"),font_size)
        image_editable = ImageDraw.Draw(template)
        _, _, w_email, h_email = image_editable.textbbox((0, 0), email, font=font)
        while w_email > 750:
            font_size -= 1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), font_size)
            _, _, w_email, h_email = image_editable.textbbox((0, 0), email, font=font)
        _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        while w_name > 900:
            font_size -= 1
            font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), font_size)
            _, _, w_name, h_name = image_editable.textbbox((0, 0), name, font=font)
        image_editable.text((750,198),name,(255,255,255),font=font)
        image_editable.text((910,252),email,(255,255,255),font=font)
        font = ImageFont.truetype(os.path.join(settings.MEDIA_ROOT, "arial.ttf"), 30)
        image_editable.text((105, 420), 'TF-'+str(26161800+ticket.id), (255, 255, 255), font=font)
        qr_img = make(request.build_absolute_uri(request.path))
        qr = qr_img.resize((250, 250))
        img_width, img_height = template.size
        result = Image.new(mode='RGB', size=(img_width, img_height), color='white')
        result.paste(template, (0, 0))
        result.paste(qr, (80, 150))
        response = HttpResponse(content_type='image/png')
        result.save(response, 'png')
        response['Content-Disposition'] = 'attachment; filename={0}'.format("Export.png")
        return response

