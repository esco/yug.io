interface IAbstractServiceApi {
	public post () {};
	public get () {};
}

export class AbstractServiceApi implements IAbstractServiceApi {

	constructor (params, reqOrFn, res) {
		this.params = params;

		if (typeof(reqOrFn) == 'function') {
			this.fn = reqOrFn;
		} else {
			this.req = req;
		}

		this.res = res;
	}

	public post () {}

	public get () {}

	public respond (data) =>
		if (this.fn) {
			this.fn(data);
		} else if (this.res) {
			res.send(data || 400);
		}
}
