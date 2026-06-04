from rest_framework import serializers


class ContactUsSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20, required=False)
    subject = serializers.CharField(max_length=250) 
    message = serializers.CharField()