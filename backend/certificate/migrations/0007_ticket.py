# Generated by Django 4.0.6 on 2022-12-06 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificate', '0006_cadata_letterimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
    ]