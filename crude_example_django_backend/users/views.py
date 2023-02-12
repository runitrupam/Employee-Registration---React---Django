from django.shortcuts import render, redirect
from users.forms import UserForm
from users.models import UserModel
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
import json
from rest_framework import serializers
from . import models
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie
import time, datetime


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields = ('__all__')


'''
{'id': 1, 'username': 'admin', 'first_name': '', 'last_name': '', 'date_joined': '2023-02-12T06:51:46.476428Z', 'uid': '2', 'uname': 'runit', 'upass': '6aBsIp8SWvz2A=', 'email': 'rr2@gmail.com', 'password': '6aBsIp8SWvz2A=', 'last_login': '2023-02-12T06:52:03.715405Z', 'is_active': True, 'is_staff': True, 'is_superuser': True, 'groups': [], 'user_permissions': []}


'''


# Create your views here.
@ensure_csrf_cookie
@api_view(['POST'])
def add_user(request):
    if request.method == "POST":
        # form = UserForm(json.loads(request.data))  # json handling for POST
        u_obj = request.data
        # u_obj['date_joined'] = time.time()
        u_obj['date_joined'] = datetime.date.today()

        form = UserForm(u_obj)  # json handling for POST

        try:
            if form.is_valid():
                form.save()

                # return HttpResponse("OK")
                return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            print("Exception ", e, form._errors)

        return Response(data=form._errors, status=status.HTTP_406_NOT_ACCEPTABLE)

    else:
        form = UserForm()
    return form


@ensure_csrf_cookie
@api_view(['GET'])
def show(request):
    employees = UserModel.objects.all()
    serializer = UserSerializer(employees, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def edit(request, id):
    employee = UserModel.objects.get(id=id)
    return Response(status=status.HTTP_200_OK)


@api_view(['PUT'])
def update(request, id):
    try:

        employee = UserModel.objects.get(id=id)
        data = request.data
        data['date_joined'] = employee.date_joined
        form = UserForm(data, instance=employee)
        if form.is_valid():
            # form.save()
            employee.save()
            return Response(status=status.HTTP_202_ACCEPTED)
            # return redirect("/show")

    except Exception as e:
        print("Exception ", e, form._errors)

    return Response(data=form._errors, status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['DELETE'])
def destroy(request, id):
    employee = UserModel.objects.get(id=id)
    employee.delete()
    return Response(status=status.HTTP_200_OK)
