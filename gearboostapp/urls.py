
from django.urls import path, include
from .views import index, paquetes, registro

urlpatterns = [
    path('',index,name='index'),
    path('paquetes/',paquetes, name='paquetes'),
    
    path('registro/',registro, name='registro')
]