# Create your views here.
from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from apis.models import *
from django.http import HttpResponse


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
