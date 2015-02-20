import * as jQuery from 'jquery';
import * as alfnavigator from 'alfnavigator';
import 'css!database/database';
import welcomeHtml from 'text!database/database.html';
import 'underscore';

export class DatabaseView extends alfnavigator.BaseContentView{
	constructor(args){
		super({html: _.template(welcomeHtml)(args.controller.model), controller: args.controller});
	}
}
