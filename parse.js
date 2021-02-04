 import * as qs from 'querystring'
 
export const pathname = u => {
	const end = u.indexOf('?')

	return u.slice(0, end === -1 ? u.length : end)
}
 
export const parse = (url) => {
      const path = pathname(url)
 
      const query = qs.parse(url.slice(url.indexOf('?')))

     return { path, query }
}
