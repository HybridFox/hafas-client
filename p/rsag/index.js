'use strict'

const products = require('./products')

const transformReqBody = (ctx, body) => {
	body.client = {type: 'WEB', id: 'RSAG', name: 'webapp'}
	body.ext = 'VBN.2'
	body.ver = '1.24'
	body.auth = {type: 'AID', aid: 'tF5JTs25rzUhGrrl'}

	return body
}

const rsagProfile = {
	locale: 'de-DE',
	timezone: 'Europe/Berlin',
	endpoint: 'https://fahrplan.rsag-online.de/bin/mgate.exe',

	transformReqBody,

	products,

	trip: true,
	radar: true,
	reachableFrom: true,

	// todo: these fail ver >=1.21, see #164
	refreshJourney: false,
	departuresGetPasslist: false,
	departuresStbFltrEquiv: false,
	// fails with this 🤷‍♂️:
	// Error: Incoming extension is not supported: VBN.2, Valid extensions: [no extension, HCSS.1.11] incoming:
	// <?xml version="1.0" encoding="utf-8"?><hciReq xmlns="hci_1_24_VBN_2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ver="1.24" ext="VBN.2" lang="eng"><auth type="AID" aid="tF5JTs25rzUhGrrl"/><client id="RSAG" type="WEB" name="webapp"/><svcReqL><item meth="SubscrUserCreate"><req xsi:type="HCIServiceRequest_SubscrUserCreate" userId="11b686b3-4b33-40e9-8825-d240ca9f1e54" language="en"><channels><item type="IPHONE" address="06fff1417a316212e624dc75f614b06f3b374c8ecc5fbf9ba467789816e033bd" name="PUSH_IPHONE" channelId="some-channel"><options><item type="NO_SOUND" value="1"/></options></item></channels></req></item></svcReqL></hciReq>
	subscriptions: false,
}

module.exports = rsagProfile
