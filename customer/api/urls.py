from django.urls import path 
from . import views   

urlpatterns = [
    path('review-list/', views.ReviewListView.as_view(), name='review-list'),
    path('customer-services/', views.ServicesView.as_view(), name='services'),

]