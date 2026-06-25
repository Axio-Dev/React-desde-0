from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from django_filters.rest_framework import DjangoFilterBackend

from .filters import HeroFilter
from .models import Hero
from .serializers import HeroSerliazer
from .pagination import HeroPagination



class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = HeroSerliazer
    pagination_class = HeroPagination
    
    filter_backends = [DjangoFilterBackend]
    filterset_class = HeroFilter

    lookup_field = "slug"


class HeroSummaryAPIView(APIView):
    def get(self, request):
        strongest = Hero.objects.order_by("-strength").first()
        smartest = Hero.objects.order_by("-intelligence").first()
        hero_count = Hero.objects.filter(category="Hero").count()
        villian_count = Hero.objects.filter(category="Villain").count()
        total_characters = Hero.objects.all().count()

        return Response({
            "strongest_hero": HeroSerliazer(strongest).data if strongest else None,
            "smartest_hero": HeroSerliazer(smartest).data if strongest else None,
            "hero_count": hero_count,
            "villian_count": villian_count,
            "total": total_characters
        })

