import { createServer } from 'http'

export const httx = ({
	handle, mw = [], formatReq = (req) => req,
	notFound, find, server = createServer()
}) => {

	const handler = (req, res) => {
		const m = [...find(mw, {
		  url: req.url,
		  method: req.method
		}), notFound]
		
		handle(formatReq(req), res, m)
	}

	server.on('request', handler)

	return { mw, server, handler }
}
