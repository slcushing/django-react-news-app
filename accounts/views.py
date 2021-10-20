from rest_framework import generics

from .models import Profile
from .serializers import AccountSerializer

# Create your views here.
class AccountListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class=AccountSerializer
    

class AccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = AccountSerializer

# class AccountListAPIView(generics.ListCreateAPIView):
#     queryset = User.objects.all()
#     serializer_class=AccountSerializer
    

# class AccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = AccountSerializer
    