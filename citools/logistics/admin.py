from django.contrib import admin
from .models import *
# Register your models here.
import getpass
creator = getpass.getuser()


class SiteAdmin(admin.ModelAdmin):
    list_display = ('site_name',)



class ReceiveIteamAdmin(admin.TabularInline):
    model = ReceiveIteam
    extra = 1


class ShipIteamAdmin(admin.TabularInline):
    model = ShipIteam
    extra = 1

class ReceivingAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields':['site_name','category_name','Ofa_receiving','courier_name','tracking_number','vendor','po','rma_id','place_location','short_desc','comment']}),
        ('Other Info', {'fields': ['creator'],'classes':['collapse']}),
    ]
    inlines = [ReceiveIteamAdmin]

    list_display =['site_name','category_name','Ofa_receiving','tracking_number','vendor','po','rma_id','place_location','short_desc','comment']

class ReceivingGettingAdmin(admin.ModelAdmin):
    fieldsets = [('Other Info', {'fields': ('info',),'classes':('collapse',)}),]

class ShippingAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields':('site_name','category_name','courier_name','tracking_number','vendor','po','rma_id','short_desc','comment')}),
        ('Other Info', {'fields': ('creator',),'classes':('collapse',)}),
    ]
    inlines = [ShipIteamAdmin]

    list_display =['site_name','category_name','tracking_number','vendor','po','rma_id','short_desc','comment']



admin.site.register(Site, SiteAdmin)
admin.site.register(Category)
admin.site.register(Courier)
admin.site.register(Receiving,ReceivingAdmin)
admin.site.register(Shipping,ShippingAdmin)
admin.site.register(ReceiveGetting,ReceivingGettingAdmin)