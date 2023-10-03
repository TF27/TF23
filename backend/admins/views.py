# Create your views here.
from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from apis.models import *
from django.http import HttpResponse
import csv

@staff_member_required
def home(request):
    compies = Compi.objects.all()  # Retrieve all competitions
    context = {
        'compies': compies,
    }
    return render(request, 'home.html', context)

# @staff_member_required
def compi_count():
    data = compi_reg.objects.all()
    compies = Compi.objects.all()

    for compi in compies:
        compi.reg_count = 0 
        print("no")

    for d in data:
        for compie in compies:
            if d.compi.name == compie.name :
                compie.reg_count+=1
                print("yes")
    
        print(d.compi.reg_count)
    return None
    


@staff_member_required
def compi(request,compiname):
    if request.method == 'GET':
        data = compi_reg.objects.all()
        compies = Compi.objects.all()
        context = {
            'reg': data,
            'compiname': compiname,
            'compies':compies,
        }

        compi_count()

        if compiname == "compi":
            return render(request, 'compi/overall.html', context)
        for reg in data:
            if reg.compi.name == compiname:
                return render(request, 'compi/compi.html', context)
        return HttpResponse("Wrong URL, check agian!!")
    return None

@staff_member_required
def export_data_to_csv_all(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="your_model_data.csv"'
    writer = csv.writer(response)
    writer.writerow([
        'TF ID',
        'Competition',
        'Name',
        'Email',
        'Google_id',
        "phoneNo",
        'City',
        'Country',
        'Gender',
        'PinCode',
        'Address',
        'Insti Name',
        'Insti Address',
        'Insti Pincode',
        'Year of Study',
        'Zonals'

        ])  # Write header row

    # Retrieve data from the model and write to CSV
    queryset = compi_reg.objects.all()
    for obj in queryset:
        writer.writerow([
            obj.tf_id,
            obj.compi,
            obj.name,
            obj.email,
            obj.google_id,
            obj.phoneno,
            obj.city,
            obj.country,
            obj.gender,
            obj.pincode,
            obj.address,
            obj.instiname,
            obj.instiadress,
            obj.instipincode,
            obj.yearofstudy,
            obj.zonals
        ])  # Adjust fields as needed

    return response

def download_compi_team_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="compi_team_data.csv"'

    writer = csv.writer(response)
    writer.writerow([
        'Team ID',
        'Competition Name',
        'Max Team Length',
        'Team Leader Name',
        'Team Leader Email',
        'Participant 1 Name',
        'Participant 1 Email',
        'Participant 2 Name',
        'Participant 2 Email',
        'Participant 3 Name',
        'Participant 3 Email',
        'Team Length',
        'Participants',
        'Single Participant',
    ])

    compi_teams = compi_team.objects.all()

    for team in compi_teams:
        writer.writerow([
            team.team_id,
            team.compi_name.name,  # Assuming compi_name has a 'name' attribute
            team.max_team_length,
            team.team_leader_name,
            team.team_leader_email,
            team.parti1_name,
            team.parti1_email,
            team.parti2_name,
            team.parti2_email,
            team.parti3_name,
            team.parti3_email,
            team.team_length,
            team.participants,
            team.single_parti,
        ])

    return response
