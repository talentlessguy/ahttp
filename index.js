import { createServer } from 'http'
import { find } from './find.js'
import { notFound } from './notFound.js'

export const httx = ({
	handle, mw, formatReq = (req) => req,
	notFound
}) => {

	mw = mw || []

	let server = createServer()

	server.on('request', (req, res) => {
	const m = [...find(mw, {
		url: req.url,
		method: req.method
	}), notFound]

		handle(formatReq(req), res, m)
	})

	return { mw, server }
}
