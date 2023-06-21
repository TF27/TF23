# Create your views here.
from django.shortcuts import render
from apis.models import compi_reg

def compi(request):
    if request.method == 'GET':
        data = compi_reg.objects.all()
        context = {'data': data}
        return render(request, 'compi.html', context)
    return None