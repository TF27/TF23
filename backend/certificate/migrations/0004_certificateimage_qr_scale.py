# Generated by Django 4.0.6 on 2022-11-23 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificate', '0003_certificateimage_qr_x_certificateimage_qr_y'),
    ]

    operations = [
        migrations.AddField(
            model_name='certificateimage',
            name='qr_scale',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]