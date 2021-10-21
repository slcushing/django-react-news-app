from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Article
from .serializers import ArticleSerializer
from .permissions import IsOwnerOrReadOnly

# Create your views here.

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.order_by('-created_at')
    serializer_class=ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Article.objects.all()
        category_selection = self.request.query_params.get('category')
        if category_selection is not None:
            queryset=queryset.filter(category=category_selection)
        return queryset



class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = (IsOwnerOrReadOnly,)
