import {DatabaseView} from 'database/DatabaseView';
import * as alfnavigator from 'alfnavigator';
import * as jQuery from 'jquery';

export class DatabaseController extends alfnavigator.BaseContentController{
	constructor(){
		super();
	}

	init(callback){
		this.model = {name: 'Mongo'};
		this.view = new DatabaseView({controller: this});
		callback();

		//TODO test
		jQuery.ajax({
			url:'/webrouter/addItemDefinition',
			type: 'POST',
			contentType: 'application/json'
		});

	}
}
