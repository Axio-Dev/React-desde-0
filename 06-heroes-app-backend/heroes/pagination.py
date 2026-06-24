from rest_framework.pagination import LimitOffsetPagination

class HeroPagination(LimitOffsetPagination):
    default_limit = 6