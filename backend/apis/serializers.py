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
        representation['is_registered'] = compi_reg.objects.filter(google_id=user, compi=instance).exists()
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