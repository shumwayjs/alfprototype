import {WelcomeView} from 'welcome/WelcomeView';
import * as alfnavigator from 'alfnavigator';

export class WelcomeController extends alfnavigator.BaseContentController{
	constructor(){
		super();
	}

	init(callback){
		this.model = {name: 'User'};
		this.view = new WelcomeView({controller: this});
		callback();
	}

	testme(){
		return 'tested';
	}
}
