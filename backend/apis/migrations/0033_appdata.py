# Generated by Django 4.2.1 on 2023-12-22 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0032_alter_faces_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, max_length=255, null=True)),
                ('visitors', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
