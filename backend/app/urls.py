from django.contrib import admin
from django.urls import path
from .views import waitList, redirect_page


urlpatterns = [
    path('', waitList, name = 'waitlist'),
    path('redirect/', redirect_page, name = 'redirect_page')
]