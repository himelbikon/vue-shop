import random
from django.core.management import BaseCommand
from faker import Faker
from shop.models import *


class Command(BaseCommand):
    def handle(self, *args, **options):
        print('<<< --- Product Populating Starts Now --- >>>')
        number = int(input('How many: '))
        for _ in range(number):
            self.create()
        print('<<< --- Product Populating Ends Now --- >>>')

    def create(self):
        faker = Faker()
        categories = Category.objects.all()

        try:
            product = Product.objects.create(
                name=faker.name(),
                details=faker.text(1000),
                price=random.randrange(10, 500),
                category=random.choice(Category.objects.all())
            )

            product.save()
            print(product)

        except Exception as e:
            print(e)
