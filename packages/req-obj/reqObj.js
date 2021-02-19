import { parse, pathname } from './parse.js'

export const objFromReq = (req) => ({ ...parse(req.url), method: req.method, url: req.url }
})
