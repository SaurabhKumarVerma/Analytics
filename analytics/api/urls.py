from django.urls import path,include
from . import views
urlpatterns = [

    path('contact/', views.contact_me),
    path('all_date/', views.all),

]
