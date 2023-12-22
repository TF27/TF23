from django.db import models

class Match(models.Model):
    day_number = [(1, 'Day 1'), (2, 'Day 2'), (3, 'Day 3')]

    team1_name = models.CharField(max_length=100)
    team2_name = models.CharField(max_length=100)
    team3_name = models.CharField(max_length=100,null=True, blank=True)
    team1_image = models.ImageField(upload_to='team_images/')
    team2_image = models.ImageField(upload_to='team_images/')
    team3_image = models.ImageField(upload_to='team_images/' ,null=True, blank=True)
    day = models.IntegerField(choices=day_number)
    match_time = models.TimeField()
    points_awarded = models.IntegerField(default=0)

    winner = models.CharField(max_length=100, blank=True)

class User(models.Model):
    name = models.CharField(max_length=100,blank=True)
    email = models.EmailField(unique=True)
    matches = models.ManyToManyField(Match, through='UserMatch')
    total_points = models.IntegerField(default=0)

class UserMatch(models.Model):
    team_choices = [(1, 'Team 1'), (2, 'Team 2'), (3, 'Team 3')]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    selected_team = models.IntegerField(choices=team_choices)

   