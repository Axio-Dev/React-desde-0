from rest_framework import serializers
from .models import Hero

class HeroSerliazer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = (
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
        read_only_fields = ("id", "slug",)