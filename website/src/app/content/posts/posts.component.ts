import { Component, ViewEncapsulation, Input, HostListener, OnInit, OnDestroy } from '@angular/core';

// services
import { PostService } from '../../services';

// dependencies
import * as _ from 'lodash';

@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
	encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit, OnDestroy {
	public posts;
	public isLoading = false;
	public empty = false;

	@Input() where = {};

	constructor(private _post:PostService) {}

	ngOnInit() {
		this._post.getPosts(this.where)
		.subscribe(posts => {
			if(!this.posts) {
				this.posts = posts;
			}
			else {
				_.concat(this.posts, posts);
			}
		});
	}

	ngOnDestroy() {
		this.posts = null;
	}

	@HostListener('window:scroll', ['$event']) addCategory(event) {
		let body = document.body;
		let html = document.documentElement;

		let maxScrollHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

		let windowHeight = window.innerHeight;
		let scrollY = document.body.scrollTop;

		let offset = 100;
		let timeOut = 500;

		if((scrollY+windowHeight) > (maxScrollHeight-offset) && !this.isLoading && !this.empty) {
			this.isLoading = true;

			this._post.getPosts(this.where, 10, this.posts.length)
			.subscribe((posts:Array<any>) => {
				if(posts.length < 10) {
					this.empty = true;
				}

				_.concat(this.posts, posts);
				this.isLoading = false;
			});
		}
	}
}
