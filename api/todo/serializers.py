from rest_framework import serializers
from .models import *


class TodoUISerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoUI
        fields = '__all__'

class BucketListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BucketList
        fields = '__all__'

