from django.db import models

class Match(models.Model):
    day_number = [(1, 'Day 1'), (2, 'Day 2'), (3, 'Day 3')]

    team1_name = models.CharField(max_length=100)
    team2_name = models.CharField(max_length=100)
    team1_image = models.ImageField(upload_to='team_images/')
    team2_image = models.ImageField(upload_to='team_images/')
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
    team_choices = [(1, 'Team 1'), (2, 'Team 2')]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    selected_team = models.IntegerField(choices=team_choices)

    # def save(self, *args, **kwargs):
    #     # Check if the selected_team matches the winner of the match
    #     if self.match.winner is not None and self.selected_team == self.match.winner:
    #         # Update the user's total points by a fixed number (e.g., 10)
    #         self.user.total_points += 10
    #         self.user.save()

    #     super(UserMatch, self).save(*args, **kwargs)
