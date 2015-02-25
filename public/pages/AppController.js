import {AppView} from 'AppView';
import * as alfnavigator from 'alfnavigator';

export class AppController {
	constructor() {
		this.appView = new AppView({controller: this});
		
		alfnavigator({contentRegister:
									{welcome: 'welcome/WelcomeController',
									 database: 'database/DatabaseController'},
			          defaultContent: 'welcome',
			          targetContent:'.content-container'
			        });
	}

	handleMenuItemClicked(content){
		alfnavigator.navigate(content);
	}
}
