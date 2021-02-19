import { httx } from 'httx'
import { handle } from '@httx/handle'
import { notFound } from '@httx/not-found'
import { find } from '@httx/find'

const mw = []

mw.push({
	path: '/',
	fn: (req, next) => {
		console.log(`${req.method} ${req.url} ${new Date().toUTCString()}`)

		next()
	}
})

mw.push({ path: '/path', fn: () => 'Custom path' })	

mw.push({ path: '/', fn: () => 'Hello World' })

module.exports.handler = httx({ mw, find, handle, notFound })
