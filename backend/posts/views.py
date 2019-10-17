from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer, ReportedIndividualSerializer
from .models import Post, ReportedIndividual

# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class ReportedIndividualSet(viewsets.ModelViewSet):
    serializer_class = ReportedIndividualSerializer
    queryset = ReportedIndividual.objects.all()
