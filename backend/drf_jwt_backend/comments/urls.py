from django.urls import path
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('comments/<slug:video_id>/', views.get_all_comments),
    path('comment/', views.user_comments),
    path('comment/<int:pk>/', views.user_changes)
]