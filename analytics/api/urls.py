from django.urls import path,include
from .views import Contact
urlpatterns = [

    path('contact/', Contact.as_view())

]
