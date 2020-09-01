from django.db import models

# Create your models here.
class BucketList(models.Model):
    name = models.CharField(max_length=30, null=True)
    about = models.CharField(max_length=30, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = True
        db_table = 'bucket_list'
    
class TodoUI(models.Model):
    title = models.CharField(max_length=15,null=True)
    content = models.CharField(max_length=50,null=True)
    bucket_id = models.IntegerField()
    due_date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'todo_ui'
