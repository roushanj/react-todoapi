from django.db import models

# Create your models here.
class BucketList(models.Model):
    name = models.CharField(max_length=255)
    no_todo = models.IntegerField(max_length=11)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = True
        db_table = 'bucket_list'
    
class TodoUI(models.Model):
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=500)
    bucket_id = models.IntegerField(max_length=6)
    due_date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'todo_ui'
