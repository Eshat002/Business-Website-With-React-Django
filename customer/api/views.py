from rest_framework import generics
from ..models import CustomerReview
from .serializers import ReviewSerializer
 

class ReviewListView(generics.ListAPIView):
    queryset = CustomerReview.objects.all()
    serializer_class = ReviewSerializer
  
