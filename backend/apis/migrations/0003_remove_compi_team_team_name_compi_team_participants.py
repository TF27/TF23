# Generated by Django 4.2.1 on 2023-07-02 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0002_alter_compi_team_compi_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='compi_team',
            name='team_name',
        ),
        migrations.AddField(
            model_name='compi_team',
            name='participants',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]