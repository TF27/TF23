# Generated by Django 4.0.6 on 2022-11-23 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificate', '0002_certificateimage_comp_w_certificateimage_comp_x_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='certificateimage',
            name='qr_x',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='certificateimage',
            name='qr_y',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
