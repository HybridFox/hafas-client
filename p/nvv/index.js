'use strict'

const products = require('./products')

const transformReqBody = (ctx, body) => {
	body.client = {
		type: 'IPH',
		id: 'NVV',
		v: '5000300',
		os: 'iOS 12.1.4',
		name: 'NVVMobilPROD_APPSTORE'
	}
	body.ver = '1.32'
	body.ext = 'NVV.6.0'
	body.auth = {type: 'AID', aid: 'Kt8eNOH7qjVeSxNA'}
	body.lang = 'de'

	return body
}

const saarfahrplanProfile = {
	locale: 'de-DE',
	timezone: 'Europe/Berlin',
	endpoint: 'https://auskunft.nvv.de/auskunft/bin/app/mgate.exe',
	transformReqBody,

	// Although the app uses `mic` & `mac`, they don't seem to be necessary.
	// addMicMac: true

	products: products,

	departuresGetPasslist: false,
	departuresStbFltrEquiv: false,
	trip: true,
	radar: true,
	reachableFrom: true,
}

module.exports = saarfahrplanProfile
