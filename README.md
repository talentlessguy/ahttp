# httx

> HTTP server, extended.

_**httx**_ is a set of small packages around HTTP server for advanced usage. This includes middleware system, request properties, and more. Every component is pluggable and is not tied to core so it's not really a web framework :P (but you can build one on top of httx)

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
