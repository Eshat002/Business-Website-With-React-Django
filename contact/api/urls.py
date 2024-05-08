from django.urls import path, include
from .views import ContactCreateView


urlpatterns = [
    path('create-contact/', ContactCreateView.as_view(), name='contact-create'),

]
