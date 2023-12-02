from rest_framework import serializers
from .models import *
from django.db.models import Q

class Compi_CardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compi
        fields = '__all__'
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = self.context.get('user')
        # modify the representation based on the extra data
        is_team_registered = False
        is_team_leader = False
        is_parti = False
        team_id1 = None
        compi_teams = compi_team.objects.filter(
            Q(team_leader_email=user) |
            Q(parti1_email=user) |
            Q(parti2_email=user) |
            Q(parti3_email=user),
            compi_name=instance
        )
        if compi_teams.exists():
            is_team_registered = True
            team = compi_teams.first()
            if team.team_leader_email == user:
                is_team_leader = True
                team_id1 = team.team_id
            else:
                is_parti = True
                team_id1 = team.team_id
        representation['is_registered'] = compi_reg.objects.filter(email=user, compi=instance).exists()
        representation['is_team_registered'] = is_team_registered
        representation['is_team_leader'] = is_team_leader
        representation['is_parti'] = is_parti
        representation['team_id'] = team_id1
        return representation


class Compi_RegSerializer(serializers.ModelSerializer):
    class Meta:
        model = compi_reg
        fields = '__all__'

class Compi_TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = compi_team
        fields = '__all__'

class Compi_InternalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compi
        fields = '__all__'
        
class NotifyingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifying
        fields = '__all__'


class WorkshopsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = '__all__'
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = self.context.get('user')
        has_paid = False
        if user:
            has_paid = workshop_reg.objects.filter(email=user, workshop=instance, paid=True).exists()
        representation['is_registered'] = workshop_reg.objects.filter(email=user, workshop=instance).exists()
        return representation
    
class WorkshopRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = workshop_reg
        fields = '__all__'

class RobowarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Robowars
        fields = '__all__'


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = self.context.get('user')
        representation['is_registered'] = robowar_reg.objects.filter(team_leader_email=user, category=instance).exists()
        return representation
    
class RobowarsRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = robowar_reg
        fields = '__all__'

class AccoRegSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AccoReg
        fields = ['acco_id', 'name', 'email', 'phone', 'gender', 'dob', 'city', 'aadhar', 'aadhar_proof', 'no_of_male', 'no_of_female', 'checkin', 'checkout']

class AccoRegProofSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccoReg
        fields = ['payment_id', 'payment_proof', 'email']

class SustainRegTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SustainRegTest
        fields = '__all__'
    
class SustainRegWebinarSerializer(serializers.ModelSerializer):
    class Meta:
        model = SustainRegWebinar
        fields = '__all__'

class SummitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Summits
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = self.context.get('user')
        has_paid = False
        if user:
            has_paid = SummitReg.objects.filter(email=user, summitisho=instance, paid=True).exists()
        representation['is_registered'] = SummitReg.objects.filter(email=user, summitisho=instance).exists()
        return representation


class SummitSpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummitSpeaker
        fields = '__all__'

class SummitRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummitReg
        fields = '__all__'

class IFTSerializer(serializers.ModelSerializer):
    class Meta:
        model = IFT
        fields = '__all__'