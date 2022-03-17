from django.db import models
from comments.models import Comment
from django.contrib.auth.models import User

# Create your models here.
class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=30)