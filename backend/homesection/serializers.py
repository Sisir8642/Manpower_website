from rest_framework import serializers
from .models import Slider, SliderImage,WhyUsItem,WhyUs,Gallery

class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = ['id', 'image']

class SliderSerializer(serializers.ModelSerializer):
    images = SliderImageSerializer(many=True, read_only=True)

    class Meta:
        model = Slider
        fields = ['id', 'heading', 'paragraph','images']

class WhyUsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyUsItem
        fields = '__all__'

class WhyUsSerializer(serializers.ModelSerializer):
    items = WhyUsItemSerializer(many=True, read_only=True)

    class Meta:
        model = WhyUs
        fields = '__all__'

class GallerySerializer(serializers.ModelsSerializer):
    class Meta:
        model=Gallery
        fields='__all__'


    