"""
URL configuration for to_do_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('task_complete/<int:id>', views.task_completed,name="completed_tasks"),
    path('task_undone/<int:id>', views.task_undone,name="task_undone"),
    path('task_delete/<int:id>', views.task_delete,name="task_delete"),
    path('new_task/', views.add_task,name="add_task"),
    path('update_task/<int:id>',views.task_update,name = "task_update"),
]
