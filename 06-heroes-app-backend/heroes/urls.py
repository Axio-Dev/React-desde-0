from django.urls import path

from rest_framework import routers

from .views import HeroViewSet, HeroSummaryAPIView, HeroSearchAPIView

router = routers.DefaultRouter()

router.register("api/heroes", HeroViewSet, "heroes")

urlpatterns = [
    path("api/heroes/summary", HeroSummaryAPIView.as_view(), name="heroes-summary"),
    path("api/heroes/search", HeroSearchAPIView.as_view(), name="hero-search")
] + router.urls