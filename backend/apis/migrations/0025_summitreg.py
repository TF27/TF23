# Generated by Django 3.2.12 on 2023-11-30 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0024_summitspeaker_company'),
    ]

    operations = [
        migrations.CreateModel(
            name='SummitReg',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('summit_id', models.CharField(blank=True, max_length=50, null=True)),
                ('summit', models.CharField(blank=True, choices=[('industry', 'industry'), ('fintech', 'fintech')], max_length=255, null=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
                ('phoneno', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('gender', models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=255, null=True)),
                ('pincode', models.IntegerField(blank=True, null=True)),
                ('paid', models.BooleanField(default=False)),
            ],
        ),
    ]