import { Injectable, EventEmitter } from '@angular/core';

// sdk
import { PostApi, UserApi } from '../sdk/services';
import { Post, Vote } from '../sdk/models';

// dependencies
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {

	constructor(private _post:PostApi, private _user:UserApi) {}

	getPosts(where = {}, limit=10, skip=0) {
		let promise = new Promise((resolve, reject) => {
			this._post
			.find({
				where: where,
				include: ['owner', 'votes'],
				order: 'created DESC',
				limit: limit,
				skip: skip
			})
			.subscribe((posts:Array<Post>) => {
				resolve(posts);
			}, err => reject(err));
		});

		return Observable.fromPromise(promise);
	}

	getOne(where = {}) {
		let promise = new Promise((resolve, reject) => {
			this._post
			.findOne({
				where: where,
				include: ['owner', 'votes']
			})
			.subscribe((post:Post) => {
				resolve(post);
			}, err => reject(err));
		});

		return Observable.fromPromise(promise);
	}

	updateVote(voteId, ownerId, type) {
		let promise = new Promise((resolve, reject) => {
			this._user.updateByIdVotes(ownerId, voteId, {
				type: type
			}).subscribe((vote:Vote) => {
				resolve(vote);
			}, err => reject(err));
		});

		return Observable.fromPromise(promise);
	}

	createVote(postId, ownerId, type) {
		let promise = new Promise((resolve, reject) => {
			this._user.createVotes(ownerId, {
				postId: postId,
				type: type
			}).subscribe((vote:Vote) => {
				resolve(vote);
			}, err => reject(err));
		});

		return Observable.fromPromise(promise);
	}
}
