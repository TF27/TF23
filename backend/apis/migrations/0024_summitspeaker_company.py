# Generated by Django 3.2.12 on 2023-11-30 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0023_summitspeaker'),
    ]

    operations = [
        migrations.AddField(
            model_name='summitspeaker',
            name='company',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]