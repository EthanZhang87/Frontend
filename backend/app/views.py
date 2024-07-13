from django.shortcuts import render, redirect
from .forms import EmailForm
from .models import registrations
# Create your views here.


from django.shortcuts import render, redirect
from .forms import EmailForm
from .models import registrations

def waitList(request):
    form = EmailForm()

    if request.method == "POST":
        form = EmailForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            if registrations.objects.filter(email=email).exists():
                form.add_error('email', 'This email is already registered.')
            else:
                form.save()
                return redirect('redirect_page')

    context = {
        'form': form
    }

    return render(request, 'app/waitlist.html', context)



def redirect_page(request):
    return render(request, "app/redirect.html")