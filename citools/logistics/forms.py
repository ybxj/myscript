__author__ = 'bwwa'
from django import forms
from .models import Site, Courier, Category, ReceiveIteam, Receiving, Shipping, ShipIteam



class SiteForm(forms.Form):
    site_name = forms.CharField(label='site')
    to_list = forms.EmailField(label='to_list')
    cc_list = forms.EmailField(label='cc_list')
    '''
    class Meta:
        model = Site
        fields = '__all__'
'''


class ReceivingForm(forms.Form):

     class Meta:
        model = Receiving
        exclude = ['creator','create_time']
        #fields = '__all__'
'''
    def set_sitechoices(self):
        sites = Site.objects.all()
        self.fields['site'].choise=()
        for site in sites:
            self.fields['site'].choise+=[(site.id,site.site_name)]
'''

'''
    site_name = forms.ModelChoiceField(Site)
    category_name = forms.ModelChoiceField(Category)
    courier_name = forms.ModelChoiceField(Courier)
    Ofa_receiving = forms.BooleanField()
    creator = forms.CharField(max_length=100)
    tracking_number = forms.CharField(max_length=200)
    vendor = forms.CharField(max_length=200)
    po = forms.CharField(max_length=200)
    rma_id = forms.CharField(max_length=200)
    place_location = forms.CharField(max_length=200)
    short_desc = forms.CharField(max_length=200)
    comment = forms.CharField(max_length=200)
    create_time = forms.DateTimeField()
'''