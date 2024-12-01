# Generated by Django 4.0.6 on 2022-11-02 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CertificateImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_id', models.CharField(max_length=20, unique=True)),
                ('template', models.ImageField(blank=True, upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_name', models.CharField(max_length=255)),
                ('rank', models.CharField(blank=True, max_length=255)),
                ('competition_name', models.CharField(max_length=255)),
                ('image_id', models.CharField(max_length=20)),
            ],
        ),
    ]
