import {Router} from 'welcome';

export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = 'Aurelia';
			config.map([ 
			            { route: ['','welcome'], moduleId: 'welcome', nav: true, title:'Welcome' }
			            ]);
		});
	}
}