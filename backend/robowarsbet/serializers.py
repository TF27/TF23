from rest_framework import serializers
from .models import Match, User, UserMatch

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id','team1_name','team2_name','team3_name','team4_name','team5_name','team6_name','team1_image','team2_image','team3_image','team4_image','team5_image','team6_image','status','type', 'match_time','day','winner','points_awarded']  # Add other fields as needed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['total_points_1','total_points_2','total_points_3','name','email']  # Add other fields as needed
