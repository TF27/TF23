# Generated by Django 4.2.1 on 2023-12-04 08:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0028_ift_alter_compi_genre'),
    ]

    operations = [
        migrations.CreateModel(
            name='IFTReg',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tf_id', models.CharField(blank=True, max_length=50, null=True)),
                ('driver_name', models.CharField(blank=True, max_length=50, null=True)),
                ('driver_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('driver_phone', models.CharField(blank=True, max_length=254, null=True)),
                ('pit_name', models.CharField(blank=True, max_length=50, null=True)),
                ('pit_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('pit_phone', models.CharField(blank=True, max_length=254, null=True)),
                ('pincode', models.IntegerField(blank=True, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.ift')),
            ],
        ),
    ]