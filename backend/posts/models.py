from django.db import models
from django.contrib.auth.models import User
from backend.models import Conference

class Post(models.Model):
    user = models.ForeignKey(User, default=None, null=True, related_name='posts', on_delete=models.DO_NOTHING)
    conference = models.ForeignKey(Conference, default=None,null=True, related_name='conference', on_delete=models.SET_NULL)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)



class ReportedIndividual(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    filer = models.ForeignKey(Post, default=None, null=True, related_name='filer', on_delete=models.SET_NULL)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
