# Create your views here.
from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from apis.models import *
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
import csv

@staff_member_required
def home(request):
    compies = Compi.objects.all()  # Retrieve all competitions
    workshops = Workshop.objects.all()  # Retrieve all workshops
    context = {
        'compies': compies,
        'workshops': workshops,
    }
    return render(request, 'home.html', context)


# @staff_member_required
def compi_count():
    compies = Compi.objects.all()

    for compi in compies:
        compi.reg_count = 0

    for compi in compies:
        for d in compi_reg.objects.filter(compi=compi):
            compi.reg_count += 1
            compi.save()  # Save the updated compi object

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

@staff_member_required
def download_compi_team_csv(request):
    # Query the database to get all compi_team objects
    compi_teams = compi_team.objects.all()

    # Create a response with a CSV attachment
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="compi_team_data.csv"'

    # Create a CSV writer
    writer = csv.writer(response)

    # Write the header row
    header = [
        'Compi Name',
        'Max Team Length',
        'Team ID',
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
        'Single Participant'
    ]
    writer.writerow(header)

    # Write data rows
    for team in compi_teams:
        data_row = [
            team.compi_name.name,  # Replace 'name' with the actual field name in the Compi model
            team.max_team_length,
            team.team_id,
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
        ]
        writer.writerow(data_row)

    return response

@staff_member_required
def download_csv_ofCompi(request, compiname):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="{compiname}_data.csv"'
    writer = csv.writer(response)

    writer.writerow([
        'Name',
        'Competition',
        'TF ID',
        'Email',
        'Google ID',
        'Phone Number',
        'City',
        'Country',
        'Gender',
        'PinCode',
        'Address',
        'Institution Name',
        'Institution Address',
        'Institution Pincode',
        'Year of Study',
        'Zonals',
    ])  # Write header row

    queryset = compi_reg.objects.filter(compi__name=compiname)

    for item in queryset:
        writer.writerow([
            item.name,
            item.compi.name,
            item.tf_id,
            item.email,
            item.google_id,
            item.phoneno,
            item.city,
            item.country,
            item.gender,
            item.pincode,
            item.address,
            item.instiname,
            item.instiadress,
            item.instipincode,
            item.yearofstudy,
            item.zonals,
        ])

    return response

@staff_member_required
def download_csv_ofCompiTeam(request, compiname):
    # Query the database to get all compi_team objects
    compi_teams = compi_team.objects.filter(compi_name = compiname)

    # Create a response with a CSV attachment
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="{compiname}_Teamdata.csv"'

    # Create a CSV writer
    writer = csv.writer(response)

    # Write the header row
    header = [
        'Compi Name',
        'Max Team Length',
        'Team ID',
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
        'Single Participant'
    ]
    writer.writerow(header)

    # Write data rows
    for team in compi_teams:
        data_row = [
            team.compi_name.name,  # Replace 'name' with the actual field name in the Compi model
            team.max_team_length,
            team.team_id,
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
        ]
        writer.writerow(data_row)

    return response

@staff_member_required
def workshop(request, workshopname):
    if request.method == 'GET':
        data = workshop_reg.objects.all()
        workshops = Workshop.objects.all()
        context = {
            'reg': data,
            'workshopname': workshopname,
            'workshops': workshops,
        }

        if workshopname == "workshop":
            return render(request, 'workshops/overall.html', context)
        else:
            try:
                data_filtered = data.filter(workshop__name=workshopname)  # Corrected the variable name
                context['reg'] = data_filtered
                return render(request, 'workshops/workshop.html', context)
            except:
                return HttpResponse("Wrong URL, check again!!")
    
    return None

@staff_member_required
def download_workshop_csv(request, workshopname):
    if workshopname == "workshop":
        regs = workshop_reg.objects.all()
    else:
        regs = workshop_reg.objects.filter(workshop__name=workshopname)

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="{workshopname}_data.csv"'

    writer = csv.writer(response)
    header = [
        'Workshop ID',
        'Workshop Name',
        'Name',
        'Email',
        'Phone Number',
        'City',
        'Gender', 
        'Pincode',
        'CA Referral',
        'Paid',
    ]
    writer.writerow(header)
    for reg in regs: 
        data_row = [
            reg.worksho_id,
            reg.workshop.name,
            reg.name,
            reg.email,
            reg.phoneno,
            reg.city,
            reg.gender,
            reg.pincode,
            reg.ca_referral,
            reg.paid,
        ]
        writer.writerow(data_row)
    return response