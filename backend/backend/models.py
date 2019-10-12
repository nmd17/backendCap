from django.db import models
from django.contrib.auth.models import User


class Conference(models.Model):
    conference_ministers = models.ManyToManyField(User)
    name = models.CharField(max_length=150)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name
