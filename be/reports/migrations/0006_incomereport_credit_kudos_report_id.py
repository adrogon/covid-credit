# Generated by Django 3.0.4 on 2020-03-22 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0005_auto_20200322_1059'),
    ]

    operations = [
        migrations.AddField(
            model_name='incomereport',
            name='credit_kudos_report_id',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]