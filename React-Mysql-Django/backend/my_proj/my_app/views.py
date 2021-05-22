from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CRUD
from .serializers import CRUDSerializer


@api_view(['GET'])
def home(request):
    if request.method == 'GET':
        values = CRUD.objects.all()
        serializer = CRUDSerializer(values, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def username(request, username):
    try:
        value = CRUD.objects.get(username=username)
    except value.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = CRUDSerializer(value)
        return Response(serializer.data)

@api_view(['POST'])
def add(request):
    if request.method == 'POST':
        x=CRUD(username=request.data['username'], email=request.data['email'], address=request.data['address'], interests=request.data['interests'])
        x.save()

@api_view(['DELETE'])
def delete(request, username):
    if request.method=='DELETE':
        x = CRUD.objects.filter(username=username)
        x.delete()

@api_view(['POST'])
def update(request, username):
    if request.method == 'POST':
        x=CRUD.objects.filter(username=username)
        x.delete()
        y=CRUD(username=request.data['username'], email=request.data['email'], address=request.data['address'], interests=request.data['interests'])
        y.save()
