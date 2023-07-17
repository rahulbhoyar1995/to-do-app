# Create your models here.
from django.db import models
from django.utils import timezone


class Tasks(models.Model):
    task_name = models.CharField(max_length=100)
    time = models.IntegerField()
    completed = models.BooleanField(default=False)
    created_time = models.DateTimeField(default=timezone.now)
    updated_time = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.task_name

