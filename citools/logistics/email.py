import datetime

def sendReceivingNotification(Site,Vendor,PO,RMAID,Courier,TrackingNumber,Signer,PlacedLocation,ReceiveIteam):
    subject = "Receiving Notification - %s - %s" % (Site, datetime.datetime.now())
    msg = '''
            <html><head>
            <style type="text/css">
            .tleft {width:150px;border:solid windowtext 1.0pt;background:#0070C0;padding:0in 5.4pt 0in 5.4pt}
            .tright {width:350px;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt}
            .thright{width:350px;border-top:solid windowtext 1.0pt;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt}
            .bth {border:solid windowtext 1.0pt;border-left:none;background:#0070C0;padding:0in 5.4pt 0in 5.4pt}
            .bthl{border:solid windowtext 1.0pt;border-left:solid windowtext 1.0pt;background:#0070C0;padding:0in 5.4pt 0in 5.4pt}
            .btd {border:solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt}
            </style>
            </head>
    '''
    msg += '<body><table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">'
    msg += '<tr><td width="117" valign="top" class="tleft">Site</td>'
    msg += '<td width="200" class="thright">%s</td></tr>' % (Site or "")
    msg += '<tr><td width="117" valign="top" class="tleft">Vendor</td>'
    msg += '<td width="200" class="tright">%s</td></tr>' % (Vendor or "")
    msg += '<tr><td width="117" valign="top" class="tleft">PO #</td>'
    msg += '<td width="200" class="tright"><a style="text-decoration:none" href="https://ofa.amazon.com">%s</a></td></tr>' % (PO or "")
    msg += '<tr><td width="117" valign="top" class="tleft">RMA ID</td>'
    msg += '<td width="200" class="tright">%s</td></tr>' % (RMAID or "")
    msg += '<tr><td width="117" valign="top" class="tleft">Courier</td>'
    msg += '<td width="200" class="tright">%s</td></tr>' % (Courier or "")
    msg += '<tr><td width="117" valign="top" class="tleft">Tracking Number</td>'
    msg += '<td width="200" class="tright">%s</td></tr>' % (TrackingNumber or "")
    msg += '<tr><td width="117" valign="top" class="tleft">Signer</td>'
    msg += '<td width="200" class="tright">%s</td></tr>' % (Signer or "")
    msg += '<tr><td width="117" valign="top" class="tleft">Placed Loction</td>'
    msg += '<td width="200" class="tright">%s</td></tr>' % (PlacedLocation or "")


    msg += '<tr><th width="130" class="bthl">Item Name</th><th width="120" class="bth">Model</th><th width="120" class="bth">SN</th>'
    msg += '<th width="80" class="bth">Quantity</th><th width="120" class="bth">Bin</th></tr>'
    for item in ReceiveIteam:
        print '222'
        msg += '<tr><td style="text-align:center" class="btd">%s</td>' % (item.item_name or "")
        msg += '<td style="text-align:center" class="btd">%s</td>' % (item.model or "")
        msg += '<td style="text-align:center" class="btd">%s</td>' % (item.SN or "")
        msg += '<td style="text-align:center" class="btd">%s</td>' % (item.quantity or "")
        msg += '<td style="text-align:center" class="btd">%s</td></tr>' % (item.bin or "")
    msg += '</table></body></html>'
    return subject, msg

'''
msg += '</table><br/>Packing list: (<a style="text-decoration:none" href="https://citools.amazon.com/html/view_receiving.htm?id=%s">View Receiving Details</a>)<br>' % (Id)
    msg += '<table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">'


 '''

'''
@staticmethod
def sendShippingNotification(data, items):
    db = DB()
    stmt = "select LogisticsNotify, LogisticsCC from SiteConfig where SiteName='%s'" % (data.Site or "")
    ret = db.queryByString(stmt)
    if ret:
        subject = "Shipping Notification - %s - %s" % (data.Site, datetime.now().__format__('%Y-%m-%d'))
        msg =
                <html><head>
                <style type="text/css">
                .tleft {width:150px;border:solid windowtext 1.0pt;background:#0070C0;padding:0in 5.4pt 0in 5.4pt}
                .tright {width:350px;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt}
                .thright{width:350px;border-top:solid windowtext 1.0pt;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt}
                .bth {border:solid windowtext 1.0pt;border-left:none;background:#0070C0;padding:0in 5.4pt 0in 5.4pt}
                .bthl{border:solid windowtext 1.0pt;border-left:solid windowtext 1.0pt;background:#0070C0;padding:0in 5.4pt 0in 5.4pt}
                .btd {border:solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt}
                </style>
                </head>

        msg += '<body><table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">'
        msg += '<tr><td width="117" valign="top" class="tleft">Site</td>'
        msg += '<td width="200" class="thright">%s</td></tr>' % (data.Site or "")
        msg += '<tr><td width="117" valign="top" class="tleft">Vendor</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.Vendor or "")
        msg += '<tr><td width="117" valign="top" class="tleft">PO</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.PO or "")
        msg += '<tr><td width="117" valign="top" class="tleft">RMA ID</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.RMAID or "")
        msg += '<tr><td width="117" valign="top" class="tleft">SSST ID</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.SSSTID or "")
        msg += '<tr><td width="117" valign="top" class="tleft">Courier</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.Courier or "")
        msg += '<tr><td width="117" valign="top" class="tleft">Tracking Number</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.TrackingNumber or "")
        msg += '<tr><td width="117" valign="top" class="tleft">Signer</td>'
        msg += '<td width="200" class="tright">%s</td></tr>' % (data.Sender or "")
        msg += '</table><br/>Packing list: (<a style="text-decoration:none" href="https://citools.amazon.com/html/view_receiving.htm?id=%s">View Receiving Details</a>)<br>' % (data.Id)
        msg += '<table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">'
        if items:
            msg += '<tr><th width="130" class="bthl">Item Name</th><th width="120" class="bth">Model</th><th width="120" class="bth">SN</th>'
            msg += '<th width="80" class="bth">Quantity</th></tr>'
            for item in items:
                msg += '<tr><td style="text-align:center" class="btd">%s</td>' % (item.ItemName or "")
                msg += '<td style="text-align:center" class="btd">%s</td>' % (item.Model or "")
                msg += '<td style="text-align:center" class="btd">%s</td>' % (item.SN or "")
                msg += '<td style="text-align:center" class="btd">%s</td>' % (item.Quantity or "")
        msg += '</table></body></html>'
        msg = MIMEText(msg.encode('utf-8'), 'html', _charset='utf-8')
        text = MIMEMultipart('alternative')
        text.attach(msg)
        cc_list = "%s,%s" % (data.Sender, ret[0]['LogisticsCC'])
        Email.sendEmail(ret[0]['LogisticsNotify'], 'citools@amazon.com', subject, text, cc_list)
'''

