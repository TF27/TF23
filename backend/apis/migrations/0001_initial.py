#<<<<<<< HEAD
# Generated by Django 3.2.12 on 2023-09-04 21:22
#=======
#<<<<<<< HEAD
# Generated by Django 4.2.2 on 2023-09-04 21:56
#=======
# Generated by Django 4.2.1 on 2023-09-04 21:49
#>>>>>>> 93b9207bf1b989ea3415f1f673fa8a0608a5d001
#>>>>>>> 742de88db86d5bcc2f0c0b4429e73abed12e0ce1

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Compi',
            fields=[
                ('genre', models.CharField(choices=[('1', 'Zonals'), ('2', 'Compis'), ('3', 'Ideates'), ('4', 'forth')], default=None, max_length=50)),
                ('tag', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('max_team_length', models.IntegerField(blank=True, null=True)),
                ('prize', models.CharField(max_length=100)),
                ('desc', models.TextField()),
                ('img', models.ImageField(upload_to='compi')),
                ('statement', models.FileField(blank=True, null=True, upload_to='ProblemStatements')),
                ('sponsorImg', models.ImageField(blank=True, null=True, upload_to='compi_sponsors')),
                ('sponsorLink', models.CharField(blank=True, max_length=250, null=True)),
                ('reg_count', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Notifying',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phoneNum', models.IntegerField()),
                ('loc', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Workshop',
            fields=[
                ('genre', models.CharField(choices=[('1', 'Zonals'), ('2', 'Compis'), ('3', 'Ideates'), ('4', 'forth')], default=None, max_length=50)),
                ('tag', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('max_team_length', models.IntegerField(blank=True, null=True)),
                ('prize', models.CharField(max_length=100)),
                ('desc', models.TextField()),
                ('register', models.CharField(max_length=100)),
                ('explore', models.CharField(max_length=100)),
                ('img', models.ImageField(upload_to='workshop')),
                ('sponsorImg', models.ImageField(blank=True, null=True, upload_to='workshop_sponsors')),
                ('about', models.TextField(null=True)),
                ('stucture', models.TextField(null=True)),
                ('timeline', models.TextField(null=True)),
                ('faqs', models.TextField(null=True)),
                ('rules', models.TextField(null=True)),
                ('contact', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='workshop_reg',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tf_id', models.CharField(blank=True, max_length=50, null=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
                ('google_id', models.CharField(blank=True, max_length=255, null=True)),
                ('phoneno', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
                ('gender', models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=255, null=True)),
                ('pincode', models.IntegerField(blank=True, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('instiname', models.CharField(blank=True, max_length=255, null=True)),
                ('instiadress', models.TextField(blank=True, max_length=200, null=True)),
                ('instipincode', models.IntegerField(blank=True, null=True)),
                ('yearofstudy', models.CharField(blank=True, choices=[('1', 'First Year'), ('2', 'Second Year'), ('3', 'Third Year'), ('4', 'Fourth Year'), ('5', 'Fifth Year'), ('16', '6th Standard'), ('17', '7th Standard'), ('18', '8th Standard'), ('19', '9th Standard'), ('20', '10th Standard'), ('21', '11th Standard'), ('22', '12th Standard')], max_length=255, null=True)),
                ('workshop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.workshop')),
            ],
        ),
        migrations.CreateModel(
            name='compi_team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('max_team_length', models.IntegerField(blank=True, null=True)),
                ('team_id', models.CharField(blank=True, max_length=50, null=True, unique=True)),
                ('team_leader_name', models.CharField(blank=True, max_length=50, null=True)),
                ('team_leader_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('parti1_name', models.CharField(blank=True, max_length=50, null=True)),
                ('parti1_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('parti2_name', models.CharField(blank=True, max_length=50, null=True)),
                ('parti2_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('parti3_name', models.CharField(blank=True, max_length=50, null=True)),
                ('parti3_email', models.EmailField(blank=True, max_length=254, null=True)),
                ('team_length', models.IntegerField(blank=True, null=True)),
                ('participants', models.CharField(blank=True, max_length=500, null=True)),
                ('single_parti', models.BooleanField(default=False)),
                ('compi_name', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='apis.compi')),
            ],
        ),
        migrations.CreateModel(
            name='compi_reg',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tf_id', models.CharField(blank=True, max_length=50, null=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
                ('google_id', models.CharField(blank=True, max_length=255, null=True)),
                ('phoneno', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
                ('gender', models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=255, null=True)),
                ('pincode', models.IntegerField(blank=True, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('instiname', models.CharField(blank=True, max_length=255, null=True)),
                ('instiadress', models.TextField(blank=True, max_length=200, null=True)),
                ('instipincode', models.IntegerField(blank=True, null=True)),
                ('yearofstudy', models.CharField(blank=True, choices=[('1', 'First Year'), ('2', 'Second Year'), ('3', 'Third Year'), ('4', 'Fourth Year'), ('5', 'Fifth Year'), ('16', '6th Standard'), ('17', '7th Standard'), ('18', '8th Standard'), ('19', '9th Standard'), ('20', '10th Standard'), ('21', '11th Standard'), ('22', '12th Standard')], max_length=255, null=True)),
                ('zonals', models.CharField(blank=True, choices=[('1', 'Mumbai'), ('2', 'Bhopal'), ('3', 'Lucknow'), ('4', 'Jaipur'), ('5', 'Bangalore')], max_length=255, null=True)),
                ('compi', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.compi')),
            ],
        ),
    ]
