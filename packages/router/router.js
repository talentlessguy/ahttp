export const router = (mw = []) => ({
	mw,
	use(path, fn, opts) {
		this.mw.push({
			path,
			fn,
			...opts
		})
	},
	get(path, fn) {
		this.use(path, fn, {
			method: 'GET'
		})
	},
	routes(){
		return this.mw
	}
})
