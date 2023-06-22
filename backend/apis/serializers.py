from rest_framework import serializers
from .models import *

class Compi_CardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compi_Cards
        fields = '__all__'


class Compi_RegSerializer(serializers.ModelSerializer):
    class Meta:
        model = compi_reg
        fields = '__all__'
