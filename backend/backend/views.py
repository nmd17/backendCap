from rest_framework import viewsets
from .models import Conference
from .serializers import ConferenceSerializer

class ConferenceView(viewsets.ModelViewSet):
    serializer_class = ConferenceSerializer
    queryset = Conference.objects.all()