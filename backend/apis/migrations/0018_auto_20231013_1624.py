# Generated by Django 3.2.12 on 2023-10-13 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0017_compi_closed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='robowar_reg',
            name='members',
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti1_email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti1_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti1_phone',
            field=models.CharField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti2_email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti2_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti2_phone',
            field=models.CharField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti3_email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti3_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='robowar_reg',
            name='parti3_phone',
            field=models.CharField(blank=True, max_length=254, null=True),
        ),
        migrations.DeleteModel(
            name='RobowarTeamMember',
        ),
    ]