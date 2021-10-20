from django.urls import path
from .views import AccountListAPIView, AccountDetailAPIView


app_name = 'api_v1'

urlpatterns = [
    path('<int:pk>/', AccountDetailAPIView.as_view(), name='account_detail'),
    path('', AccountListAPIView.as_view(), name='account_list'),
]