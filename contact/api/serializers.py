from rest_framework import serializers
from ..models import Contact

class ContactSerializer(serializers.ModelSerializer):
    full_name =  serializers.CharField(error_messages={'blank': 'Come on, a little effort! Fill this field in.',})
    email = serializers.EmailField(error_messages={'blank': 'Come on, a little effort! Fill this field in.'})
    message = serializers.CharField(error_messages={'blank': 'Come on, a little effort! Fill this field in.'})

    class Meta:
        model = Contact
        fields = ['full_name', 'email', 'message']
     
   