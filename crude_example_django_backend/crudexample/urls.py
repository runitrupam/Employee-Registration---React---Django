from django.contrib import admin  
from django.urls import path  
from users import views
from django.urls.conf import include

urlpatterns = [  
    path('admin/', admin.site.urls),  
    path('register', views.add_user),
    path('show',views.show),  
    path('edit/<int:id>', views.edit),  
    path('update/<int:id>', views.update),  
    path('delete/<int:id>', views.destroy),
    # url(r'^api-auth/', include('rest_framework.urls'))
]  