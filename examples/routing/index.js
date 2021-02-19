1import { httx } from 'httx'
import { handle } from '@httx/handle'
import { router } from '@httx/router'
import { notFound } from '@httx/not-found'
import { find } from '@httx/find'
import { objFromReq } from '@httx/req-obj'

const r = router()

r.use('/', (_, next) => next())

r.use('/params', (obj) => {
	return 'hello'
})

const { server } = httx({ handle, mw: r.routes(), find, notFound, formatReq: objFromReq })

server.listen(3000, () => console.log(`Started on :3000`))
