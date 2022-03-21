from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework.views import APIView


# Create your views here.

# class Comment_List(APIView):
  
#   def get(self, request, format=None):
#     products = Comment.objects.all()
#     serializer = CommentSerializer(products, many=True)
#     return Response(serializer.data)

#  def put(self, request, pk, format=None):
#     product = self.get_object(pk)
#     serializer = CommentSerializer(product, data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(serializer.data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#   def post(self, request, format=None):
#     serializer = CommentSerializer(data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class Product_Detail(APIView):

#   def get_object(self, pk):
#     try:
#       return Comment.objects.get(pk=pk)
#     except Comment.DoesNotExist:
#       raise Http404

#   def get(self, request, pk, format=None):
#     product = self.get_object(pk)
#     serializer = CommentSerializer(product)
#     return Response(serializer.data)

#   def put(self, request, pk, format=None):
#     product = self.get_object(pk)
#     serializer = CommentSerializer(product, data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(serializer.data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#   def delete(self, request, pk, format=None):
#     product = self.get_object(pk)
#     product.delete()
#     return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
    if request.method == "GET":
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def user_changes(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        # request.method == "PUT":
    comments = get_object_or_404(Comment, pk=pk)
    serializer = CommentSerializer(comments, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data)