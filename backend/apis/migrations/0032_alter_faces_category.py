# Generated by Django 4.2.1 on 2023-12-18 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0031_faces_ching_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faces',
            name='category',
            field=models.CharField(blank=True, choices=[('Exhi', 'Exhi'), ('Lect', 'Lect'), ('Techx', 'Techx')], max_length=255, null=True),
        ),
    ]