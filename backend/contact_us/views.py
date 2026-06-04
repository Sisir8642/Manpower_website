# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser       
from django.core.mail import EmailMessage
from .serializers import ContactUsSerializer
from django.conf import settings

class ContactUsView(APIView):
    parser_classes = [JSONParser]                   

    def post(self, request):
        serializer = ContactUsSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            email_body = f"""
                            🚀 New Contact Inquiry Received
                            ----------------------------------------
                            Name      : {data['name']}
                            Email     : {data['email']}
                            Phone     : {data.get('phone', 'N/A')}
                            Subject   : {data['subject']}
                            Message   : {data['message']}
                            ----------------------------------------
                            Source    : Website Contact Form
                            """
            msg = EmailMessage(
                subject=f"New Contact Inquiry - {data['name']}",
                body=email_body,
                to=[settings.EMAIL_HOST_USER],        
                reply_to=[data['email']],
            )
            msg.send()
            return Response({"message": "Message sent successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)