from django.urls import path

from rest_framework import routers

from .views import HeroViewSet, HeroSummaryAPIView

router = routers.DefaultRouter()

router.register("api/heroes", HeroViewSet, "hereos")

urlpatterns = [
    path("api/heroes/summary", HeroSummaryAPIView.as_view(), name="heroes_summary")
] + router.urls