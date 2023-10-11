from django.shortcuts import render

# Create your views here.
def mun(request):
    return render(request, 'mun.html')
