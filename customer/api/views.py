from rest_framework import generics
from ..models import CustomerReview, CustomerService
from .serializers import ReviewSerializer, CustomerServiceSerializer
 

class ReviewListView(generics.ListAPIView):
    queryset = CustomerReview.objects.all()
    serializer_class = ReviewSerializer
  

class ServicesView(generics.ListAPIView):
    queryset = CustomerService.objects.all()
    serializer_class = CustomerServiceSerializer