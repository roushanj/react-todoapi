from rest_framework import viewsets
from .serializers import *


class TodoUI(viewsets.ModelViewSet):
    """
        This is API call for Todo's
    """

    queryset = TodoUI.objects.all()
    serializer_class = TodoUISerializer


class BucketList(viewsets.ModelViewSet):
    """
        This is API call for Bucket's
    """

    queryset = BucketList.objects.all()
    serializer_class = BucketListSerializer



