from django.db import models

# Create your models here.
class CRUD(models.Model):
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    address = models.TextField(max_length=15)
    interests = models.TextField(max_length=20)

    
