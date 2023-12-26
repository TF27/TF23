from django.db import models

class Match(models.Model):
    day_number = [(1, 'Day 1'), (2, 'Day 2'), (3, 'Day 3')]
    match_type = [(1,'Robowars'),(2,'IFT'),(3,'Drone-Racing')]
    status_info = [('Finished','Finished'),('Ongoing','Ongoing'),('Betting-On','Betting-On'),('Future','Future')]
    #finished -- completed, no bet option
    #ongoing -- Live, no bet option
    #bettingon -- In some time, betting on
    #future -- in future, no bet option

    team1_name = models.CharField(max_length=100)
    team2_name = models.CharField(max_length=100)
    team3_name = models.CharField(max_length=100,null=True, blank=True)
    team4_name = models.CharField(max_length=100,null=True, blank=True)
    team5_name = models.CharField(max_length=100,null=True, blank=True)
    team6_name = models.CharField(max_length=100,null=True, blank=True)
 
    team1_image = models.ImageField(upload_to='team_images/')
    team2_image = models.ImageField(upload_to='team_images/')
    team3_image = models.ImageField(upload_to='team_images/' ,null=True, blank=True)
    team4_image = models.ImageField(upload_to='team_images/' ,null=True, blank=True)
    team5_image = models.ImageField(upload_to='team_images/' ,null=True, blank=True)
    team6_image = models.ImageField(upload_to='team_images/' ,null=True, blank=True)

    status = models.CharField(max_length = 100,choices = status_info,null= True,blank=True)
    type = models.IntegerField(choices = match_type,null =True,blank=True)
    day = models.IntegerField(choices=day_number)
    match_time =models.CharField(max_length=100, blank=True)
    points_awarded = models.IntegerField(default=0)
    winner = models.CharField(max_length=100, blank=True)

class User(models.Model):
    name = models.CharField(max_length=100,blank=True)
    email = models.EmailField(unique=True)
    matches = models.ManyToManyField(Match, through='UserMatch')
    total_points_1 = models.IntegerField(default=0)
    total_points_2 = models.IntegerField(default=0)
    total_points_3 = models.IntegerField(default=0)

class UserMatch(models.Model):
    team_choices = [(1, 'Team 1'), (2, 'Team 2'), (3, 'Team 3')]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    selected_team = models.IntegerField(choices=team_choices)

   