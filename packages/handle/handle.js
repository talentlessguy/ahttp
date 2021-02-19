import { STATUS_CODES } from 'http'

export const sendErr = (err, req, res) => res.writeHead(500).end(STATUS_CODES[500])

export const send = (body, res) => body && res.end(body)

export const handle = (obj, res, mw, onError = sendErr) => {

	let idx = 0

	const loop = () => res.writableEnded || (idx < mw.length && send(mw[idx++].fn(obj, next), res ))
	
	const next = ((err) => (err ? onError(err, req, res) : loop()))
	
	loop()
}
