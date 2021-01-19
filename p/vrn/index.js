'use strict'

const products = require('./products')

const transformReqBody = (ctx, body) => {
	body.client = {type: 'IPH', id: 'DB-REGIO-VRN', name: 'VRN', v: '6000400'}
	body.ext = 'DB.R19.04.a'
	body.ver = '1.34'
	body.auth = {type: 'AID', aid: 'p091VRNZz79KtUz5'}

	return body
}

const hvvProfile = {
	locale: 'de-DE',
	timezone: 'Europe/Berlin',
	endpoint: 'https://vrn.hafas.de/bin/mgate.exe',

	transformReqBody,

	products,

	trip: true,
	radar: true,
	reachableFrom: true,
	refreshJourney: true,
	refreshJourneyUseOutReconL: true,
	departuresGetPasslist: false, // `departures()`: support for `getPasslist`?
	departuresStbFltrEquiv: false, // `departures()`: support for `stbFltrEquiv`?
}

module.exports = hvvProfile
