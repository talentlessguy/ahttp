# httx

coming soon...

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
