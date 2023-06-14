from rest_framework import serializers
from .models import *

class Compi_CardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compi_Cards
        fields = '__all__'

    