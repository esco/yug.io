import AbstractServiceApi = module('Abstract');
import CardServiceModel = module('../model/Card');

export class CardServiceApi extends AbstractServiceApi {

	public get () {
		CardServiceModel.get(this.params.id, this.respond);
	}

	public post () {

	}

	public update (id) {

	}
}
