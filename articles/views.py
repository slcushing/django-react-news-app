from rest_framework import generics
# from rest_fromwork.permissions import IsAuthenticatedOrReadOnly

from .models import Article
from .serializers import ArticleSerializer
# from .permissions import IsOwnerOrReadOnly

# Create your views here.

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class=ArticleSerializer

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
