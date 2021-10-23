from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView, ArticleListAdminAPIView


app_name = 'articles'

urlpatterns = [
    path('<int:pk>/', ArticleDetailAPIView.as_view(), name='article_detail'),
    path('admin/', ArticleListAdminAPIView.as_view(), name='article_list'),
    path('', ArticleListAPIView.as_view(), name='article_list'),
]