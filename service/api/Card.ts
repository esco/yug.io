import AbstractServiceApi = module('./Abstract');
var serviceModel = new (require('../model/Card.ts').CardServiceModel);

export class CardServiceApi extends AbstractServiceApi.AbstractServiceApi {

	public get (params, fn) {
		serviceModel.get(params.id, fn);
	}

	public post (params, fn) {
		console.log('post');
	}

	public update (params, fn) {

	}

	public search (params, fn) {
		serviceModel.search(params.query, params.start, params.limit, fn);
	}

	public list(params, fn) {
		serviceModel.list(params.start, params.limit, fn);
	}
}