from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=100,null=False)
    last_name = models.CharField(max_length=100,null=False,default='NA')
    email = models.EmailField(null=False)
    message = models.TextField(max_length=None,null=False)
    date = models.DateField(auto_now_add=True,null=True)

    def __str__(self):
        return self.first_name

