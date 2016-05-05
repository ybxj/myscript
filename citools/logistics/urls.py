__author__ = 'bwwa'
from django.conf.urls import include, url
from .views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'site', site, name='site'),
#    url(r'receiving', receiving, name='receiving'),
]