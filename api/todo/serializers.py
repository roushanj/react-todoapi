from rest_framework import serializers
from .models import *


class TodoUISerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoUI
        fields = '__all__'

