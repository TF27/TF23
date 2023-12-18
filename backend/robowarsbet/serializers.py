from rest_framework import serializers
from .models import Match, User, UserMatch

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id','team1_name','team2_name','team1_image','team2_image','match_time','day','winner','points_awarded']  # Add other fields as needed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['total_points','name','email']  # Add other fields as needed
