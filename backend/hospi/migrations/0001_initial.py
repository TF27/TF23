# Generated by Django 4.2.2 on 2023-12-18 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.EmailField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(blank=True, max_length=100, null=True)),
                ('payment_id', models.CharField(blank=True, max_length=100, null=True)),
                ('boys', models.IntegerField(blank=True, null=True)),
                ('girls', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
