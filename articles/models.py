from django.db import models
from django.conf import settings

# Create your models here.
class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255, null=True)
    body = models.TextField(null=True)
    image = models.ImageField(upload_to='articles/', null=True)
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
    status = models.CharField(
        max_length=4,
        choices=STATUS_OF_ARTICLE_CHOICES,
        default=DRAFT,
    )
    NEWS = 'NEWS'
    HEALTH = 'HLTH'
    SPORTS = 'SPRT'
    TECH = 'TECH'
    OPINION = 'OPIN'
    CATEGORY_OF_ARTICLE = [
        (NEWS, 'News'),
        (HEALTH, 'Health'),
        (SPORTS, 'Sports'),
        (TECH, 'Tech'),
        (OPINION, 'Opinion'),
    ]
    category = models.CharField(
        max_length=4,
        choices=CATEGORY_OF_ARTICLE,
        default = NEWS
    )





# https://docs.djangoproject.com/en/3.2/ref/models/fields/#choices

