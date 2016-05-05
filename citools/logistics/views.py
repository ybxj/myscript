from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from django.forms.models import inlineformset_factory
from forms import  *
import getpass,datetime
creator = getpass.getuser()
# Create your views here.


def index(request):
    return render(request, 'index1.html')



def site(request):
    if request.method == "POST":
        try:
            site_form = SiteForm(request.POST,auto_id=True)
            if site_form.is_valid():
                print 'aaa'
                site = Site.objects.create( site_name = site_form.cleaned_data['site_name'],
                                            to_list = site_form.cleaned_data['to_list'],
                                            cc_list = site_form.cleaned_data['to_list']
                )
                site.save()
                return render(request, 'index.html')
            else:
                #print site_form.is_valid(), site_form.errors
                site_form = SiteForm(request.POST)
                #return render(request, 'index.html')

        except Exception as e:
            print e
    return render(request,'site.html',locals())



#receiving
'''
def receiving(request, id):
    site = Site.objects.get(pk=id)
    ReceivingFormSet = inlineformset_factory(Receiving,Site,fields=('site_name',))
    #para = Receiving(creator=creator, create_time=datetime.datetime.now())
    if request.method == "POST":
        try:
            receiving_form = ReceivingFormSet(request.POST, instance=site)
            if receiving_form.is_valid():
                print 'aaa'

                receiving = Receiving.objects.create( site_name = receiving_form.cleaned_data['site_name'],
                                            category_name = receiving_form.cleaned_data['category_name'],
                                            courier_name = receiving_form.cleaned_data['courier_name'],
                                            Ofa_receiving = receiving_form.cleaned_data['Ofa_receiving'],
                                            tracking_number = receiving_form.cleaned_data['tracking_number'],
                                            vendor = receiving_form.cleaned_data['vendor'],
                                            po = receiving_form.cleaned_data['po'],
                                            rma_id = receiving_form.cleaned_data['rma_id'],
                                            place_location = receiving_form.cleaned_data['place_location'],
                                            short_desc = receiving_form.cleaned_data['short_desc'],
                                            comment = receiving_form.cleaned_data['comment']
                )

                receiving = receiving_form.save(commit=False)
                receiving.creator=creator
                receiving.create_time=datetime.datetime.now()
                receiving.save()
                return render(request, 'index.html')
            else:
                print receiving_form.is_valid(), receiving_form.errors
                receiving_form = ReceivingForm()
                #return render(request, 'index.html')

        except Exception as e:
            print e
    return render(request,'new_receiving.htm',locals())
'''