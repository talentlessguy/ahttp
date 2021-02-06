# httx

> HTTP server, extended.

_**httx**_ is an enhanced HTTP server _and_ set of small components around HTTP server for advanced usage.

If you need a ready-to-go framework, use `httx`, otherwise you can set up your own using httx components. Every component is pluggable and isn't tied to core.

## Example

### Ready-to-go setup

```js
import { httx } from 'httx'
import { router } from '@httx/router'

const r = router()

r.use('/', (_, next) => next())

r.get('/', obj => `Hello from ${obj.path}`)

const app = httx({ mw: r.routes() })

app.listen(3000, () => console.log(`Started on :3000`))
```

### Manual setup

```js
import { httx } from '@httx/core'
import { handle } from '@httx/handle'
import { router } from '@httx/router'
import { find } from '@httx/find'
import { notFound } from '@httx/notFound'
import { objFromReq } from '@httx/obj'

const r = router()

r.use('/', (_, next) => next())

r.get('/', obj => `Hello from ${obj.path}`)

const { server } = httx({ handle, mw: r.routes(), notFound, find, formatReq: objFromReq })

server.listen(3000, () => console.log(`Started on :3000`))
```

## Roadmap

- Build all micro modules
- Create `httx` for all packages combined (e.g. a web framework)
- Create examples of Express-like and Koa-like frameworks on top of `httx`
- Compare perf of `httx` vs `httx-polka` vs `httx-koa` vs `httx-tinyhttp` vs `polka` vs `tinyhttp` vs `express` vs `koa` vs `fastify`
