from django.db import models
from PIL import Image
from users.models import User

# URL = 'http://127.0.0.1:8000'


class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)
    image = models.ImageField(upload_to='category', blank=True, null=True)

    def __str__(self):
        return f"{self.name}"


class Product(models.Model):
    name = models.CharField(max_length=30)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=7, decimal_places=2, blank=False)
    ratings = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    count_in_stock = models.IntegerField(default=15)

    views = models.IntegerField(default=0)
    order_count = models.IntegerField(default=0)
    details = models.TextField()

    image = models.ImageField(upload_to='shop', blank=True, null=True)
    image2 = models.ImageField(upload_to='shop', blank=True, null=True)
    image3 = models.ImageField(upload_to='shop', blank=True, null=True)
    image4 = models.ImageField(upload_to='shop', blank=True, null=True)
    image5 = models.ImageField(upload_to='shop', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('-id',)

    def save(self, *args, **kwargs):
        super(Product, self).save(*args, **kwargs)
        if self.image:
            self.resize(self.image, 500, 500)

    def resize(self, image, width, height):
        img = Image.open(image.path)
        size = (width, height)
        img = img.resize(size)
        img.save(image.path)


class UserRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    star = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return f"{self.user} gives {self.star} to {self.product.name}"


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    text = models.TextField()


# def save(self, *args, **kwargs):
    #     super(Product, self).save(*args, **kwargs)
