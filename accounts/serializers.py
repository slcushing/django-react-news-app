from rest_framework import serializers

from .models import Profile, User

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

# class AccountSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'