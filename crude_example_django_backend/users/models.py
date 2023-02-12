from django.db import models

from django.contrib.auth.models import AbstractUser, BaseUserManager ## A new class is imported. ##
#
# class UserModel(models.Model):
#     uid = models.CharField(max_length=20)
#     uname = models.CharField(max_length=20)
#     upass = models.CharField(max_length=20)
#     class Meta:
#         db_table = "userDetails"


class UserModel(AbstractUser):
    uid = models.CharField(max_length=21,null=True)
    uname = models.CharField(max_length=20, null=True)
    upass = models.CharField(max_length=20,null=True)
    email = models.EmailField(('email address'), unique=True, )
    password = models.CharField(max_length=50, blank=False, null=False, verbose_name="Senha")
    last_login = models.DateTimeField(blank=True, null=True, verbose_name='last login')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    def __str__(self):
        return self.email +":" + self.username
    class Meta:
        db_table = "userDetails"