# Create your views here.
from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from apis.models import *
from django.http import HttpResponse
import csv

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
        if compiname == "compi":
            return render(request, 'compi/overall.html', context)
        for reg in data:
            if reg.compi.name == compiname:
                return render(request, 'compi/compi.html', context)
        return HttpResponse("Wrong URL, check agian!!")
    return None


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
