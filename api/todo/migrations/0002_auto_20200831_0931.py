# Generated by Django 3.1 on 2020-08-31 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bucketlist',
            name='no_todo',
        ),
        migrations.AddField(
            model_name='bucketlist',
            name='about',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='bucketlist',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='todoui',
            name='bucket_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='todoui',
            name='content',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='todoui',
            name='title',
            field=models.CharField(max_length=15),
        ),
    ]
