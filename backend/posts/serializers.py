from rest_framework import serializers
from .models import Post, ReportedIndividual
from django.contrib.auth.models import User
from backend.models import Conference

class PostSerializer(serializers.ModelSerializer):
    conference = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
     )

    user = serializers.SlugRelatedField(
         many=False,
         read_only=True,
         slug_field='username'
     )
     
    class Meta:
        model = Post
        fields = ('body', 'conference', 'user')

    def create(self, validated_data):
        print(self.context['request'].data)
        post = Post.objects.create(
            body = validated_data['body']   
        )
        user_who_posted = User.objects.get(username=self.context['request'].user)
        conference = Conference.objects.get(name=self.context['request'].data['conference'])

        post.user = user_who_posted
        post.conference = conference

        post.save()

        reported = ReportedIndividual.objects.create(
            first_name = self.context['request'].data['first_name'],
            last_name = self.context['request'].data['last_name']
        )

        reported.filer = post

        reported.save()

        return post

class ReportedIndividualSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportedIndividual
        fields = ('first_name', 'last_name')

