import { Component, ViewEncapsulation, Input, OnInit,  ViewChild, ElementRef } from '@angular/core';

// services
import { LogService, UserService } from '../../services';

// sdk
import { User, Post } from '../../sdk/models';

// dependencies
import * as _ from 'lodash';

@Component({
	selector: 'base-header',
	templateUrl: './header.component.html',
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit{
	public user:User;
	public kudos:number = 0;

	@ViewChild('header') header:ElementRef;

	constructor(private _user:UserService, private _log:LogService) {}

	ngOnInit() {
		this.user = this._user.user;
		if(this.user) {
			this.getPosts();
		}
		this._user.userUpdated
		.subscribe(() => {
			this.user = this._user.user;
			this.getPosts();
		}, err => this._log.error(err));
	}

	getPosts() {
		if(this.user) {
			this._user.posts()
			.subscribe((posts:Array<Post>) => {
				this.user.posts = posts;
				this.kudos = 0;

				_.each(this.user.posts, post => {
					let upVotes = _.filter(post.votes, {type: 'up'});
					this.kudos += upVotes.length;
				});
			}, err => this._log.error(err));
		}
	}
}
