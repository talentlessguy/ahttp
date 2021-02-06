import { STATUS_CODES } from 'http'
import * as qs from 'querystring'
import { parse, pathname } from './parse.js'

export const objFromReq = (req) => {

	const { path, query } = parse(req.url)

	return { path, query, method: req.method, url: req.url }
}

export const onError = (err, req, res) => {
	res.writeHead(500).end(STATUS_CODES[500])
}

export const send = (body, res) => body && res.end(body)


export const handle = (obj, res, mw) => {

	let idx = 0

	const loop = () => res.writableEnded || (idx < mw.length && send(mw[idx++].fn(obj, next), res ))
	
	let next = ((err) => (err ? onError(err, req, res) : loop()))
	
	loop()
}
