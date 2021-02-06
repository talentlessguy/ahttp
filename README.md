# httx

> HTTP server, extended.

_**httx**_ is a set of small components around HTTP server for advanced usage. This includes middleware system, request properties, and more.

Every component is pluggable and isn't tied to core.

## Example

```js
import { httx } from 'httx'
import { handle } from '@httx/handle'
import { router } from '@httx/router'

const r = router()

r.use('/', (_, next) => next())

r.get('/', obj => `Hello from ${obj.path}`)

const { server } = httx({ handle, mw: r.routes() })

server.listen(3000, () => console.log(`Started on :3000`))
```

## Roadmap

- Build all micro modules
- Create `@httx/app` for all packages combined
- Creat examples of Express-like and Koa-like frameworks on top of `httx`
