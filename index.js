import { createServer } from 'http'
import { objFromReq, find } from './handle.js'
import { notFound } from './notFound.js'

export const httx = ({
	handle, mw
}) => {

	mw = mw || []

	let server = createServer()

	server.on('request', (req, res) => {
	const m = [...find(mw, {
		url: req.url,
		method: req.method
	}), notFound()]

		handle(objFromReq(req), res, m)
	})

	return { mw, server }
}
