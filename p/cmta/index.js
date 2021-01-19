'use strict'

const products = require('./products')

const transformReqBody = (ctx, body) => {
	body.client = {
		type: 'IPH',
		id: 'CMTA',
		v: '2',
		name: 'CapMetro'
	}
	body.ver = '1.40'
	body.auth = {type: 'AID', aid: 'ioslaskdcndrjcmlsd'}

	return body
}

const cmtaProfile = {
	locale: 'en-US',
	timezone: 'America/Chicago',
	endpoint: 'https://capmetro.hafas.cloud/bin/mgate.exe',
	transformReqBody,

	products,

	trip: true,
	radar: true,
	refreshJourney: true,
	reachableFrom: true,
	remarks: true, // `.svcResL[0].res.msgL[]` is missing though 🤔
}

module.exports = cmtaProfile
