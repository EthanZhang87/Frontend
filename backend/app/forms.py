from django.forms import ModelForm
from django import forms
from .models import registrations


class EmailForm(ModelForm):
    class Meta:
        model = registrations
        fields = "__all__"