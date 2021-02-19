const pathname = u => {
        const end = u.indexOf('?')

        return u.slice(0, end === -1 ? u.length : end)
}

export const find = (mw, { method, url }) => mw.filter((m) =>  (m.method ? m.method === method : true) && pathname(url).startsWith(m.path))
