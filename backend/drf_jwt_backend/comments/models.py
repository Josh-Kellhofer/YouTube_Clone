from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class Comment(models.Model):
    # model=1 user, user=many cars (setup)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=30)
    text = models.CharField(max_length=30)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)


