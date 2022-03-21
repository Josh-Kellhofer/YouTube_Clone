from django.urls import path, include
from replies import views

# # <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    # path('', views.user_replies),
    path('replies/<str:user>/', views.get_all_replies),
]