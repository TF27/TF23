# Generated by Django 3.2.12 on 2023-09-27 08:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0003_auto_20230927_0802'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workshop',
            name='tag',
        ),
    ]
