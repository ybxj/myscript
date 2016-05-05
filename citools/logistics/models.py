from django.db import models
from django.core.mail import send_mail
from .email import *
from django.core.mail import EmailMultiAlternatives
from django.template import Context, loader
import time,os
import getpass
import pickle
creator = getpass.getuser()
# Create your models here.

class Site(models.Model):
    site_name = models.CharField(max_length=200, blank=False)
    to_list = models.EmailField(max_length=100, blank=False)
    cc_list = models.EmailField(max_length=100, blank=False)

    def __unicode__(self):
        return self.site_name


class Category(models.Model):
    category_name = models.CharField(max_length=200)

    def __unicode__(self):
        return self.category_name

class Courier(models.Model):
    courier_name = models.CharField(max_length=200)
    def __unicode__(self):
        return self.courier_name

class Receiving(models.Model):
    id = models.AutoField (primary_key=True)
    site_name = models.ForeignKey(Site, blank=False)
    category_name = models.ForeignKey(Category, blank=False)
    courier_name = models.ForeignKey(Courier, blank=False)
    Ofa_receiving = models.BooleanField(default=False)
    creator = models.CharField(max_length=100,default= creator)
    tracking_number = models.CharField(max_length=200, blank=False)
    vendor = models.CharField(max_length=200)
    po = models.CharField(max_length=200)
    rma_id = models.CharField(max_length=200)
    place_location = models.CharField(max_length=200, blank=False)
    short_desc = models.CharField(max_length=200)
    comment = models.TextField(max_length=200)
    create_time = models.DateTimeField(verbose_name='Time',auto_now=True)






    '''
    def save(self, *args, **kwargs):
        super(Receiving,self). save(self, *args, **kwargs)

        print self.id
        items = ReceiveIteam.objects.filter(receiving=self.id)
        print items
        item1 = ReceiveIteam.objects.get(receiving_id=self.site_name.id)[22]




        #items = ReceiveIteam.objects.filter(receiving_id=self.id)
        item = Receiveiteam.objects.get(receiving_id=self.site_name.id)[22]


        subject, html = sendReceivingNotification(self.site_name,self.vendor,self.po,self.rma_id,                      self.courier_name,self.tracking_number,self.creator,self.place_location)
        s=Site.objects.get(pk=self.site_namei.id)
        msg = EmailMultiAlternatives(subject, html, 'bwwa@amazon.com', [s.to_list])
        msg.attach_alternative(html, "text/html")
        msg.send()
        '''




class Shipping(models.Model):
    site_name = models.ForeignKey(Site, verbose_name='Site',blank=False)
    category_name = models.ForeignKey(Category,verbose_name='Category', blank=False)
    courier_name = models.ForeignKey(Courier, blank=False)
    creator = models.CharField(max_length=100,verbose_name='Creator', default= creator)
    tracking_number = models.CharField(max_length=200,verbose_name='Tracking Number')
    vendor = models.CharField(max_length=200,verbose_name='Vendor')
    po = models.CharField(max_length=200,verbose_name='PO')
    rma_id = models.CharField(max_length=200,verbose_name='RMA ID')
    short_desc = models.CharField(max_length=200,verbose_name='Short Description')
    comment = models.TextField(max_length=200,verbose_name='Comment')
    create_time = models.DateTimeField(verbose_name='Create Time',auto_now=True)


class ReceiveIteam(models.Model):
    receiving = models.ForeignKey(Receiving)
    info = models.ForeignKey('ReceiveGetting')
    item_name = models.CharField(max_length=200, default='switch',blank=True)
    model = models.CharField(max_length=200,blank=True)
    SN = models.CharField(max_length=200,blank=True)
    asset_id = models.CharField(max_length=200,blank=True)
    bin = models.CharField(max_length=200,blank=True)
    quantity = models.CharField(max_length=50,blank=True)
    note = models.CharField(max_length=200,blank=True)

    '''
    def GetInfo(self):
        print self.item_name

    def save(self, *args, **kwargs):
        super(ReceiveIteam,self). save(self, *args, **kwargs)
        self.GetInfo()
        print 'aaa'


        if self.receiving.id:
                print self.item_name
                print 'success'
                a.append(str(self.item_name))
        else:
            pass
            #ss=Receiving.objects.get(pk=self.receiving_id)[111]


        super(ReceiveIteam,self). save(self, *args, **kwargs)
        print a
    #ss=Receiving.objects.get(pk=self.receiving_id)[111]


        print self.item_name
        if self.receiving_id!=receiving_id:
            pass
        else:
            print self.receiving_id
            res=ReceiveIteam.objects.filter(receiving_id=self.receiving_id)

            ab=ReceiveIteam.objects.extra(select={"items":"select * from logistics_receiveiteam where receiving_id = %s" % (self.id)})
            while True:
                time.sleep(5)
                break
            res=ReceiveIteam.objects.filter(receiving_id=self.receiving_id)
            items = Receiving.objects.get(pk=self.receiving_id)
            #print items.courier_name
            s=Site.objects.get(pk=items.site_name.id)
            for re in res:
                print re.item_name,re.model,re.model,re.SN,re.asset_id,re.bin,re.quantity
            ss=Receiving.objects.get(pk=self.receiving_id)[111]


    def change_view(self, request, object_id, form_url='', extra_context=None):
        #result_template = super(MyAdmin, self).change_view(request, object_id, form_url, extra_context)
        res=ReceiveIteam.objects.filter(receiving_id=self.receiving_id)

        print res
        for i in res:
            print i.model
            print res.item_name[1]
        for i in self.SN:
            print i
        print '22222'

        items = Receiving.objects.get(pk=self.receiving_id)
        #print items.courier_name
        s=Site.objects.get(pk=items.site_name.id)
        #ss=Receiving.objects.get(pk=self.receiving_id)[111]
        subject, html = sendReceivingNotification(items.site_name,items.vendor,items.po,items.rma_id,                  items.courier_name,items.tracking_number,items.creator,items.place_location,res)
        msg = EmailMultiAlternatives(subject, html, 'bwwa@amazon.com', [s.to_list])
        msg.attach_alternative(html, "text/html")
        msg.send()

    def create_receiving(self):
        return os.urandom(32).encode('hex')

        subject, html = sendReceivingNotification(items.site_name,items.vendor,items.po,items.rma_id,                  items.courier_name,items.tracking_number,items.creator,items.place_location,res)
        msg = EmailMultiAlternatives(subject, html, 'bwwa@amazon.com', [s.to_list])
        msg.attach_alternative(html, "text/html")
        msg.send()

        print '12122'
        print self.receiving_id
        ab=ReceiveIteam.objects.extra(select={"bin":"select bin from logistics_receiveiteam where                      receiving_id = "+ str(self.receiving_id)}) # % (self.receiving_id)
        print ab
        for i in ab:
            print i.SN
        items = Receiving.objects.select_for_update().filter(pk=self.receiving_id)
        ss=Receiving.objects.get(pk=self.receiving_id)[111]

        #ss=Receiving.objects.get(pk=self.receiving_id)[111]
        '''





class ShipIteam(models.Model):
    shipping = models.ForeignKey(Shipping)
    item_name = models.CharField(max_length=200,default='switch',blank=True)
    model = models.CharField(max_length=200,blank=True)
    SN = models.CharField(max_length=200,blank=True)
    asset_id = models.CharField(max_length=200,blank=True)
    quantity = models.CharField(max_length=50,blank=True)
    note = models.CharField(max_length=20,blank=True)


class ReceiveGetting(models.Model):
    info=models.CharField(max_length=10,blank = True)

    def save(self, *args, **kwargs):
        super(ReceiveGetting,self). save(self, *args, **kwargs)
        print self.info
        print 'aaa'
        a=ReceiveIteam.objects.all()
        print a
        b=ReceiveIteam.objects.filter(pk=self.info)[1]
