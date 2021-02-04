export const router = (mw) => ({
	use(path, fn, ...params) {
		mw.push({
			path,
			fn,
			...params
		})
	},
	get(path, fn) {
		this.use(path, fn, {
			method: 'GET'
		})
	}
})
