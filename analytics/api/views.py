from django.shortcuts import render
from rest_framework.views import APIView
from .contactSerlizer import ContactSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class Contact(APIView):
    def post(self,request):

        try:
            serialized = ContactSerializer(data=request.data)

            if serialized.is_valid():
                serialized.save()
            else:
                return Response({'error':'Error In Processcing Data'})
        except:
            return Response(status=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE)

        return Response({
            'sucessfull':'Sucessfully Saved'
        })