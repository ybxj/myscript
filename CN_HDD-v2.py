#!/usr/bin/env python
import types  
import urllib2  
import urllib
import json
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib
import time, datetime
import types  
import argparse
import string

def registerUrl():
            try:
            	url ="https://user:passwd@mobility-search.amazon.com/solr/parts/select/?q=state:DESTROYED&fq=type_name:%28%22Hard%20Drive%22%20OR%20%22SSD%22%20OR%20%22UNKNOWN_HARD_DRIVE%22%20OR%20%22UNKNOWN_SSD%22%29&fq=cluster_name:%28%22PEK%22%20OR%20%22BJS%22%20OR%20%22ZHY%22%29&version=2.2&start=0&rows=500&indent=on&sort=last_updated_time%20desc"
                data = urllib.urlopen(url).read()
                return data
            except Exception,e:
                print e


def GetTicket(sn):
	try:
		url= "https://user:passwd@mobility-search.amazon.com/solr/repairs/select/?q=part_serial:"+sn+"&rows=100&start=0&indent=on"
		data = urllib.urlopen(url).read()
		value = json.loads(data)
		num=int(value["response"]["numFound"])
		ticket = value["response"]["docs"][num-1]["ticket"]
		return ticket
	except Exception,e:
                print e

def GetRepairType(sn):

	try:
                url= "https://user:passwd@mobility-search.amazon.com/solr/repairs/select/?q=part_serial:"+sn+"&rows=100&start=0&indent=on"
                data = urllib.urlopen(url).read()
                value = json.loads(data)
                num=int(value["response"]["numFound"])
                repairtype = value["response"]["docs"][num-1]["part_repair_type"][0]
                return repairtype
        except Exception,e:
                print e




def Receiver(cluster):
	if cluster =='BJS':
		mail_to="bjs-datatech@amazon.com"
		mail_cc="dco-managers-bjs@amazon.com"
	if cluster =='PEK':
		mail_to="pek-datatech@amazon.com"
                mail_cc="dco-managers-pek@amazon.com"
	return mail_to, mail_cc

def GetSite():
	parse = argparse.ArgumentParser()
	parse.add_argument('-s',action='append', dest='collection',default=[],help='Add repeated values to a list')
	args=parse.parse_args()
	return args.collection

	
date1=time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
data = registerUrl() 
value = json.loads(data)
list = value["response"]["docs"]
time1= list[1]['last_updated_time']
date2=time1[0:10]+" "+time1[11:19]
tnow=datetime.datetime.now()
t1 = datetime.datetime.strptime(date2, '%Y-%m-%d %H:%M:%S')



def DailyReport(site,time):
	html='<p><b>Daily media destroyed in site of '+site+'</b></p>'
	html+='<p>Please check the following information for the HDD audit.</p>'
	count=0
	decomm=0
        repair=0
	html+='<table border="2" bordercolor="#000000" cellspacing="0px" style="border-collapse:collapse"><tr><th>Site</th><th>Room</th><th>Model</th><th>serial No.</th><th>Vendor</th><th>Type</th><th>Repair Type</th><th>Time</th><th>Login</th><th>State</th><th>Bin</th><th>Ticket No.</th></tr>'
	for list1 in list:
        	if ((tnow - datetime.datetime.strptime(list1['last_updated_time'][0:10]+" "+list1['last_updated_time'][11:19], '%Y-%m-%d %H:%M:%S')).days==0 and (tnow - datetime.datetime.strptime(list1['last_updated_time'][0:10]+" "+list1['last_updated_time'][11:19], '%Y-%m-%d %H:%M:%S')).seconds/3600 < time and list1['last_seen_in_site']==site):
			html+='<tr>'
			html+=('<td>'+list1['last_seen_in_site']+'</td>')
			html+=('<td>'+list1['room']+'</td>')
			html+=('<td>'+list1['model']+'</td>')
			html+=('<td><a href=https://mobility.amazon.com/part/part/'+str(list1['id'])+'>'+list1['serial_id']+'</td>')
			html+=('<td>'+list1['vendor']+'</td>')
			html+=('<td>'+list1['type_name']+'</td>')
			if type(GetRepairType(list1['serial_id'])) is not types.NoneType:
                	        html+=('<td>'+GetRepairType(list1['serial_id'])+'</td>')
				if GetRepairType(list1['serial_id'])=="DECOMMISSION":
                                        decomm+=1
                                if GetRepairType(list1['serial_id'])=="REPAIR":
                                        repair+=1

			else:
				pass
			updatetime=datetime.datetime.strptime(list1['last_updated_time'][0:10]+" "+list1['last_updated_time'][11:19], '%Y-%m-%d %H:%M:%S')+ datetime.timedelta(hours=8)
			html+=('<td>'+str(updatetime)+'</td>')
			html+=('<td>'+list1['disposed_by']+'</td>')
			html+=('<td>'+list1['state']+'</td>')
			html+=('<td>'+list1['fq_bin']+'</td>')
	                if type(GetTicket(list1['serial_id'])) is not types.NoneType:
				html+=('<td>'+GetTicket(list1['serial_id'])+'</td>')
			html+=('</tr>')
			count+=1
	html+='</table>'
	if count==0:
		html='<p><b>Daily media destroyed in site of '+site+'</b></p>'
	        html+='<p>Please check the following information for the HDD audit.</p>'
		html+='<strong><font color="green"><p> No HDD destroyed <p></font></strong>'
	

	html+='<p><strong>Count for the HDDs:</strong></p>'
        html+='<p>Decommission:'+str(decomm)+'</p>'
        html+='<p>Repair:'+str(repair)+'</p>'
	html+='-'*80
	return html


def SendEmail(mail_to,mail_cc,cluster):
	msg = MIMEText(html,_subtype='html',_charset='gb2312')
	msg['to'] = mail_to
	msg['cc'] = mail_cc
	#msg['cc'] = ','.join(mail_cc)
	msg['from'] = 'hddreport@amazon.com'
	msg['subject'] = 'Daily HDD Destroy Report for'+" "+cluster
	try:
		server=smtplib.SMTP('localhost')
	        server.sendmail(msg['from'], [mail_to,msg['cc']], msg.as_string())
		server.quit()
		print 'sucessfully'
	except Exception, e:
		print str(e)




if __name__=='__main__':
	s=0
	html=''
	sites=GetSite()
	for site in sites:
		if site in ('PEK7','BJS11','BJS20','BJS10'):
			time=12
		else:
			time=24
		context=DailyReport(site, time)
		html+=context
		s+=1
	html+='<p>Please contact bwwa@amazon.com if there is any question.</p>'
	if s==len(sites):
		mail_to,mail_cc=Receiver(sites[0][:3])
		SendEmail(mail_to, mail_cc,sites[0][:3])
	



