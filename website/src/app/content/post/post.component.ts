import { Component, ViewEncapsulation, Input, OnDestroy, OnInit } from '@angular/core';

// sdk
import { Post, Vote } from '../../sdk/models';

// services
import { PostService, UserService } from '../../services';

// dependencies
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
	selector: 'post',
	templateUrl: './post.component.html',
	encapsulation: ViewEncapsulation.None
})
export class PostComponent {
	@Input() post;

	public isFormatted = false;
	public user;

	constructor(private _post:PostService, private _user:UserService){}

	ngOnInit() {
		this.format(this.post);

		this.user = this._user.user;
		this.checkVoted();
		this._user.userUpdated
		.subscribe(() => {
			this.user = this._user.user;
			this.checkVoted();
		});
	}

	format(post) {
		post.upVotes = _.filter(post.votes, {type: 'up'});
		post.downVotes = _.filter(post.votes, {type: 'down'});

		post.created = moment(post.created);
		post.updated = moment(post.created);

		post.owner = {
			id: post.owner.id,
			username: post.owner.username
		};

		this.isFormatted = true;
		this.post = post;
	}

	checkVoted() {
		if(this.user) {
			let voted = _.find(this.post.votes, {'ownerId': this.user.id});
			if(voted) {
				this.post.voted = voted;
			}
		}
	}

	upVote() {
		if(this.user) {
			if(this.post.voted) {
				this.updateVote('up');
			}
			else {
				this.createVote('up');
			}
		}
	}

	downVote() {
		if(this.user) {
			if(this.post.voted) {
				this.updateVote('down');
			}
			else {
				this.createVote('down');
			}
		}
	}

	updateVote(type) {
		this._post
		.updateVote(this.post.voted.id, this.user.id, type)
		.subscribe((vote:Vote) => {
			let currentIndex = _.findIndex(this.post.votes, {id: vote.id});
			this.post.votes[currentIndex] = vote;

			this.format(this.post);
			this.checkVoted();
		});
	}

	createVote(type) {
		this._post
		.createVote(this.post.id, this.user.id, type)
		.subscribe((vote:Vote) => {
			this.post.votes.push(vote);

			this.format(this.post);
			this.checkVoted();
		});
	}

	ngOnDestroy() {
		this.post = null;
	}
}
