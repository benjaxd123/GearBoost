
from django.urls import path, include
from .views import index, registro, login, edit_confimado

urlpatterns = [
    path('',index,name='index'),
    
    path('registro/',registro, name='registro'),

    path('login/', login, name='login'),

    path('edit-confirmado/', edit_confimado, name='edit_confirmado'),
]