 import * as qs from 'querystring'
 
export const pathname = u => {
	const end = u.indexOf('?')

	return u.slice(0, end === -1 ? u.length : end)
}
 
export const parse = (url) => ({
	path: pathname(url),
	query: qs.parse(url.slice(url.indexOf('?'))) || {}
})
