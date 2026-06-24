from .models import Hero
from rest_framework import viewsets, permissions
from .serializers import HeroSerliazer
from .pagination import HeroPagination

class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = HeroSerliazer
    pagination_class = HeroPagination