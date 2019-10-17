from rest_framework import viewsets
from .models import Conference
from django.contrib.auth.models import User
from .serializers import ConferenceSerializer
from accounts.api.serializers import UserSerializer

class ConferenceView(viewsets.ModelViewSet):
    serializer_class = ConferenceSerializer
    queryset = Conference.objects.all()

class UsersView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()