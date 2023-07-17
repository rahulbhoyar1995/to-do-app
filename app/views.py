from django.shortcuts import render, redirect
from app.models import Tasks


def index(request):
    in_progess_tasks = Tasks.objects.filter(completed=False).order_by('-created_time')
    completed_tasks = Tasks.objects.filter(completed=True)
    context = {
        "in_progess_tasks": in_progess_tasks,
        "completed_tasks" : completed_tasks,
        }
    return render(request, 'app/index.html', context)


def task_completed(request,id):
    task = Tasks.objects.get(id=id)
    task.completed = True
    task.save()
    return redirect('index')

def task_undone(request,id):
    task = Tasks.objects.get(id=id)
    task.completed = False
    task.save()
    return redirect('index')

def task_update(request, id):
    task = Tasks.objects.get(id=id)
    if request.method == 'POST':
        task_name = request.POST.get('task_name')
        time = request.POST.get('time')  
        task.task_name = task_name
        task.time = time
        task.save()
        return redirect('index')
    
    context = {"task":task}
    return render(request, 'app/update_task.html', context)

def task_delete(request,id):
    task = Tasks.objects.get(id=id)
    task.delete()
    return redirect('index')


def add_task(request):
    if request.method == 'POST':
        task_name = request.POST.get('task_name')
        time = request.POST.get('time')  
        new_task_obj = Tasks(task_name=task_name,\
            time=time)
        new_task_obj.save()
        return redirect('index')
    
    context = {}
    return render(request, 'app/add_task.html', context)


    
