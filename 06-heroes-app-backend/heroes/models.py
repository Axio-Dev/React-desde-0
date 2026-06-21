from django.db import models
import uuid

class Universe(models.TextChoices):
    SU = "SU", "Sin Universo"
    MARVEL = 'MV', "Marvel"
    DC = "DC" , "Detective Comics"

# Create your models here.
class Hero(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    alias = models.CharField(max_length=100)

    powers = models.JSONField(default=list)

    description = models.TextField()

    strength = models.IntegerField()
    intelligence = models.IntegerField()
    speed = models.IntegerField()
    durability = models.IntegerField()

    team = models.CharField(max_length=100)
    image = models.CharField(max_length=100)

    first_appearance = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    universe = models.CharField(
        max_length=2,
        choices=Universe.choices,
        default=Universe.SU
    )