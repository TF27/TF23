from rest_framework import serializers
from .models import *

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
        if user is not None:
            if (compi_team.objects.filter(team_leader_email=user, compi_name=instance).exists() or compi_team.objects.filter(parti1_email=user, compi_name=instance).exists() or compi_team.objects.filter(parti2_email=user, compi_name=instance).exists() or compi_team.objects.filter(parti3_email=user, compi_name=instance).exists()):
                is_team_registered = True
                if(compi_team.objects.filter(team_leader_email=user, compi_name=instance).exists()):
                    is_team_leader = True
                else:
                    is_parti = True
        representation['is_registered'] = compi_reg.objects.filter(email=user, compi=instance).exists()
        representation['is_team_registered'] = is_team_registered
        representation['is_team_leader'] = is_team_leader
        representation['is_parti'] = is_parti
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
        representation['is_registered'] = workshop_reg.objects.filter(email=user, workshop=instance).exists()
        return representation
    
class WorkshopRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = workshop_reg
        fields = '__all__'
