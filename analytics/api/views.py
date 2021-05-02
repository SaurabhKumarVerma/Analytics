from django.shortcuts import render
from rest_framework.views import APIView
from .contactSerlizer import ContactSerializer
from rest_framework.response import Response
from rest_framework import status, viewsets
from loguru import logger
from .models import Contact
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import datetime
from django.db.models import Count
from django.db.models import Q
from . models import Contact
# Create your views here.

@csrf_exempt
@api_view(['POST'])
def all(request):
    start_date = request.data["start"]
    end_date = request.data["end"]
    format = "%Y-%m-%d"

    start1_obj = datetime.datetime.strptime(start_date, format)
    end1_obj = datetime.datetime.strptime(end_date, format)

    sample = Contact.objects.filter(Q(date__gte=start1_obj) & Q(date__lte=end1_obj)).extra({'date':"date(date)"}).values('date').annotate(Count = Count("pk"))
    return Response(list(sample))


@csrf_exempt
@api_view(['POST'])
def ContactForm(request):

    serialized = ContactSerializer(data=request.data)

    if serialized.is_valid():
        serialized.save()
    else:
        return Response({'error': serialized.errors})

    result = Contact.objects.all()
    ContactSerializer(result,many=True)

    return Response({
        "Contact":"Shortly We Will touch with you "
    })









# class Contact(viewsets.ModelViewSet):
#     queryset = Contact.objects.all().values()

    # serializer_class = ContactSerializer

    # def post(self,request):
    #
    #
    #     serialized = ContactSerializer(data=request.data)
    #     logger.info(request.data)
    #     if serialized.is_valid():
    #         serialized.save()
    #     else:
    #         return Response({'error':'Error In Processcing Data'})
    #
    #
    #     # result = Contact.objects.all()
    #     logger.error(Contact.objects.all())
    #     # ContactSerializer(result,many=True)
    #
    #     return Response({
    #         'sucessfull':'Sucessfully Saved'
    #     })


# class ContactDate(viewsets.ModelViewSet):
#     queryset = Contact.objects.all().values()
#     serializer_class = ContactSerializer
#
#     for i in queryset:
#         logger.info(i['contacted_date'])
#
#     serializer_class = ContactSerializer

    # def post(self,request):
    #
    #
    #     serialized = ContactSerializer(data=request.data)
    #     logger.info(request.data)
    #     if serialized.is_valid():
    #         serialized.save()
    #     else:
    #         return Response({'error':'Error In Processcing Data'})
    #
    #
    #     # result = Contact.objects.all()
    #     logger.error(Contact.objects.all())
    #     # ContactSerializer(result,many=True)
    #
    #     return Response({
    #         'sucessfull':'Sucessfully Saved'
    #     })

# class ContactDate(viewsets.ModelViewSet):
#
#
#
#     queryset = Contact.objects.all().values()
#     for i in queryset:
#         logger.info(i['contacted_date'])


# logger.info(type(Contact.objects.all().values()))
