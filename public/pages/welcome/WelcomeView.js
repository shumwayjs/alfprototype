import * as jQuery from 'jquery';
import * as alfnavigator from 'alfnavigator';
import 'css!welcome/welcome';
import welcomeHtml from 'text!welcome/welcome.html';
import 'underscore';

export class WelcomeView extends alfnavigator.BaseContentView{
	constructor(args){
		super({html: _.template(welcomeHtml)(args.controller.model), controller: args.controller});		
	}
}