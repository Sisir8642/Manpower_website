from django.core.mail import EmailMessage
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactUsSerializer


class ContactUsView(APIView):
    def post(self, request):
        serializer = ContactUsSerializer(data=request.data)

        if serializer.is_valid():
            data = serializer.validated_data

            email_body = f"""
                            🚀 New Contact Inquiry Received

                            ----------------------------------------
                            👤 Candidate Information
                            ----------------------------------------
                            Name      : {data['name']}
                            Email     : {data['email']}
                            Phone     : {data.get('phone', 'N/A')}

                            ----------------------------------------
                            📝 Message Details
                            ----------------------------------------
                            Subject   : {data['subject']}

                            Message:
                            {data['message']}

                            ----------------------------------------
                            📌 System Info
                            ----------------------------------------
                            Source    : Website Contact Form
                            """

            msg = EmailMessage(
                subject=f"New Contact Inquiry - {data['name']}",
                body=email_body,
                to=["staff@yourcompany.com"],
                reply_to=[data['email']],
            )

            msg.send()

            return Response(
                {"message": "Message sent successfully"},
                status=status.HTTP_200_OK,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )