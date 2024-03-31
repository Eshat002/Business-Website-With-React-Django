from rest_framework import serializers
from ..models import CustomerReview

class ReviewSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='customer.user.username')
    customer_avatar_url = serializers.SerializerMethodField()


    class Meta:
        model = CustomerReview
        fields = ['id','name','body', 'customer_avatar_url']

    def get_customer_avatar_url(self, obj):
            return obj.customer.avatar.url
         
        