from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

import math

class HeroPagination(LimitOffsetPagination):
    default_limit = 6
    max_limit = 100

    def get_paginated_response(self, data):
        count = self.count
        limit = self.limit or self.default_limit

        total_pages = math.ceil(count / limit)

        return Response({
            "count": count,
            "total_pages": total_pages,
            "limit": limit,
            "offset": self.offset,
            "next": self.get_next_link(),
            "previous": self.get_previous_link(),
            "results": data,
        })