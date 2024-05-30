from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'gearboostapp/index.html')


def registro(request):
    return render(request, 'gearboostapp/registro.html')

def login(request):
    return render(request, 'gearboost/login.html')

def edit_confimado(request):
    return render(request, 'edit_confirmado.html')