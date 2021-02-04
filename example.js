import { httx } from './index.js'
import { handle } from './handle.js'
import { router } from './router.js'

const { mw, server } = await httx({ handle })

const r = router(mw)

r.use('/', (obj, next) => {
		console.log('Bruh')
		next()
})

r.get('/params', (obj) => {
	return `Hello World from ${obj.path}`
})

r.routes()

server.listen(3000, cb)
