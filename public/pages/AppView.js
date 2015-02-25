import * as jQuery from 'jquery';
import * as bootstrap from 'bootstrap';
import * as alfnavigator from 'alfnavigator';
import 'css!main.css';
import mainHtml from 'text!main.html';

export class AppView{
	/**
	 * @param args: {controller: AppController}
	 */
	constructor(args){
		this.controller = args.controller;
		this.$el = jQuery('body');
		this.initNavBar();
	}

	initNavBar(){
		this.$el.append(mainHtml);		
		this.$el.on('click', '.navbar a[data-content]', event => {
			var $target = jQuery(event.target);
			this.controller.handleMenuItemClicked($target.attr('data-content'));
			event.preventDefault();
		});
	}
}
