from django.contrib import admin
from .models import Conference
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

class ConferenceAdmin(admin.ModelAdmin):
    search_fields = ('conference_ministers',)


admin.site.register(Conference)
