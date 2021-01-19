'use strict'

const products = require('./products')

const transformReqBody = (ctx, body) => {
	body.client = {type: 'WEB', id: 'RSAG', name: 'webapp'}
	body.ext = 'VBN.2'
	body.ver = '1.42'
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
	refreshJourneyUseOutReconL: true,
	departuresGetPasslist: false,
	departuresStbFltrEquiv: false,
}

module.exports = rsagProfile
