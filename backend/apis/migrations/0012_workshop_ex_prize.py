# Generated by Django 3.2.12 on 2023-10-06 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0011_workshop_sponsorlink'),
    ]

    operations = [
        migrations.AddField(
            model_name='workshop',
            name='ex_prize',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
