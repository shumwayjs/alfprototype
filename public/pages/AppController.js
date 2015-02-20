import {AppView} from 'AppView';
import * as alfnavigator from 'alfnavigator';

export class AppController {
	constructor() {
		alfnavigator({contentRegister:
									{welcome: 'welcome/WelcomeController',
									 database: 'database/DatabaseController'},
			          defaultContent: 'welcome',
			          targetContent:'.content-container'
			        });
		this.appView = new AppView({controller: this});
	}

	handleMenuItemClicked(content){
		alfnavigator.navigate(content);
	}
}
