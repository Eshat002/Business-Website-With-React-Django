from rest_framework import generics
from contact.models import Contact
from .serializers import ContactSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
