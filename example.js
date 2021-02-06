import { httx } from './index.js'
import { handle } from './handle.js'
import { router } from './router.js'

const r = router()

r.use('/', (_, next) => next())

r.use('/params', (obj) => void obj.x = 5)

const { server } = httx({ handle, mw: r.routes() })

server.listen(3000, () => console.log(`Started on :3000`))
