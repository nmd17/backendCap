from django.db import models

class Conference(models.Model):
    name = models.CharField(max_length=150)