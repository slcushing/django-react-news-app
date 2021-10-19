from django.db import models
from django.conf import settings

# Create your models here.
class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255, null=True)
    body = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=False, null=True)
    # is_published = models.BooleanField(default=False)
    DRAFT = 'DFT'
    SUBMITTED ='SUBM'
    PUBLISHED = 'PUBL'
    REJECTED = 'REJ'
    STATUS_OF_ARTICLE_CHOICES = [
        (DRAFT, 'Draft'),
        (SUBMITTED, 'Submitted'),
        (PUBLISHED, 'Published'),
        (REJECTED, 'Rejected'),
    ]
    status_of_article = models.CharField(
        max_length=4,
        choices=STATUS_OF_ARTICLE_CHOICES,
        default=DRAFT,
    )




# https://docs.djangoproject.com/en/3.2/ref/models/fields/#choices

