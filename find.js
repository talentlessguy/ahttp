export const find = (mw, { method, url }) => mw.filter((m) =>  (m.method ? m.method === method : true) && m.path === pathname(url))
