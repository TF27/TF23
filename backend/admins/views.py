# Create your views here.
from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from apis.models import compi_reg


@staff_member_required
def compi(request,gen):
    if request.method == 'GET':
        data = compi_reg.objects.all()
        context = {
            'data': data,
            'gen': str(gen)
            }

        if(gen>0 and gen<5): 
            return render(request, 'compi/genre.html', context)
        else:
            return render(request, 'compi/overall.html', context)
    return None