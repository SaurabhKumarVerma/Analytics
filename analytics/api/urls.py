from django.urls import path,include
from .views import all
from . import views
# from rest_framework.routers import DefaultRouter
# router = DefaultRouter()
# router.register('contact', Contact, basename='Contact')
# router.register('contacted', ContactDate, basename='ContactDate')
urlpatterns = [

    # path('contact/',include(router.urls)),
    # path('contacted/',include(router.urls)),

    path('all_date/', views.all),
    path('contact/',views.ContactForm)
    # path('contactdate/',ContactDate.as_view())

]
