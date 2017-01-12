import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';

// dependencies
import * as _ from 'lodash';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
	public articles = [1, 2, 3, 4, 5, 6];

	private canScroll = true;

	constructor(){}

	ngOnInit() {}

	@HostListener('window:scroll', ['$event']) addCategory(event) {
		let body = document.body;
		let html = document.documentElement;

		let maxScrollHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

		let windowHeight = window.innerHeight;
		let scrollY = document.body.scrollTop;

		let offset = 100;
		let timeOut = 500;

		if((scrollY+windowHeight) > (maxScrollHeight-offset) && this.canScroll) {
			this.canScroll = false;

			setTimeout(() => {
				this.canScroll = true;
			}, timeOut);


			let currentLast = _.last(this.articles);

			let start = currentLast+1;
			let end = start+5;

			let newRange = _.range(start, end);

			this.articles = this.articles.concat(newRange);
		}
	}
}
