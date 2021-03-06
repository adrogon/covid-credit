# Generated by Django 3.0.4 on 2020-03-21 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='incomereport',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='incomereport',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='incomereport',
            name='email',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='incomereport',
            name='full_name',
            field=models.TextField(blank=True),
        ),
    ]
