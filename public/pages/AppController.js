import {AppView} from 'AppView';
import * as alfnavigator from 'alfnavigator';

export class AppController {
	constructor() {
		// the view must be before the navigator
		this.appView = new AppView({controller: this});

		alfnavigator({contentRegister:
									{welcome: 'welcome/WelcomeController',
									 database: 'database/DatabaseController'},
			          defaultContent: 'welcome',
			          targetContent:'.content-container',
			          animate: true
			        });
		this.navigator = alfnavigator;
	}

	handleMenuItemClicked(content){
		alfnavigator.navigate(content);
	}
}
