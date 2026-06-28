import django_filters
from django.db.models import Q

from .models import Hero

class HeroFilter(django_filters.FilterSet):
    category = django_filters.CharFilter(method="filter_category")

    class Meta:
        model = Hero
        fields = ["category"]

    def filter_category(self, queryset, name, value):
        if not value or value.lower() == "all":
            return queryset
        
        return queryset.filter(category__iexact=value)

class HeroSearchFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(method="filter_name")
    strength = django_filters.NumberFilter(field_name="strength", lookup_expr="gte")
    universe = django_filters.CharFilter(lookup_expr="iexact")
    
    class Meta:
        model = Hero
        fields = [
            "team",
            "category",
            "universe",
            "status",
        ]
    
    def filter_name(self, queryset, name, value):
        return queryset.filter(
            Q(name__icontains=value) | Q(alias__icontains=value)
        )