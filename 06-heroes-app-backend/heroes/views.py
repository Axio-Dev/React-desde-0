from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from django_filters.rest_framework import DjangoFilterBackend

from .filters import HeroFilter, HeroSearchFilter
from .models import Hero
from .serializers import HeroSerializer
from .pagination import HeroPagination



class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = HeroSerializer
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
            "strongest_hero": HeroSerializer(strongest).data if strongest else None,
            "smartest_hero": HeroSerializer(smartest).data if strongest else None,
            "hero_count": hero_count,
            "villian_count": villian_count,
            "total": total_characters
        })

class HeroSearchAPIView(generics.ListAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer

    filter_backends = [DjangoFilterBackend]

    filterset_class = HeroSearchFilter