# ahttp

coming soon...

## Example

```js
import { App, send, Router } from 'ahttp'

const app = new App()

const router = new Router()

app.use(() => send(404))

app.use((req) => {
  return send(`You're on ${req.url}`)
})

router.get('/', () => send('Hello World'))

await app.listen(3000)
```
