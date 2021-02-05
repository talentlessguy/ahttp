# httx

HTTP server, extended. _**httx**_ is a set of small packages around HTTP server for advanced usage, including middlewares, URL parameters, and more. Every component is pluggable and is not tied to core.

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
