# httx

coming soon...

## Example

```js
import { httx } from 'httx'
import { router } from '@httx/router'

const { req, res, router, mw, server } = httx({ router })

mw.add('/', ({ next }) => {
  res.on('finish', () => console.log('logged'))

  next()
})

router.get('/', () => ({ hello: 'world' }))

mw.add('/', () => router.routes())

await server.listen(3000)
```
