import django_filters

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