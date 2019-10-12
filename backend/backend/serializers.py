from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Conference

class ConferenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Conference
        fields = ('conference_ministers', 'name', 'location')

