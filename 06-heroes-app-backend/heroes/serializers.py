from rest_framework import serializers
from .models import Hero

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = (
            "id",
            "slug",
            "name",
            "alias",
            "powers",
            "description",
            "strength",
            "intelligence",
            "speed",
            "durability",
            "team",
            "image",
            "first_appearance",
            "status",
            "category",
            "universe",
        )