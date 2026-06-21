from rest_framework import routers
from .api import HeroViewSet

router = routers.DefaultRouter()

router.register("api/heros", HeroViewSet, "heros")

urlpatterns = router.urls