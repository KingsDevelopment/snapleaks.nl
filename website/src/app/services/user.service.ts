import { Injectable, EventEmitter } from '@angular/core';

// sdk
import { UserApi } from '../sdk/services';
import { User } from '../sdk/models';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
	private _user;
	public authenticated:EventEmitter<any> = new EventEmitter<any>();
	public userUpdated:EventEmitter<any> = new EventEmitter<any>();

	constructor(private _userApi:UserApi) {
		this.authenticated
		.subscribe(value => {
			if(value && !this._user) {
				this.setUserFromApi();
			}
		});
		this.setUserFromApi();
	}

	get user() {
		return this._user;
	}

	set user(user) {
		this._user = user;
		this.userUpdated.next(this.user);
	}

	// proxy functions
	logout() {
		this.authenticated.emit(false);
		return this._userApi.logout();
	}

	register(values) {
		return this._userApi.create(values);
	}

	update(changes) {
		let promise = new Promise((resolve, reject) => {
			this._userApi
			.updateAttributes(this._user.id, changes)
			.subscribe(result => {
				resolve(this.setUserFromApi());
			}, err => reject(err));
		});

		return Observable.fromPromise(promise);
	}

	// customized
	login(values) {
		let promise = new Promise((resolve, reject) => {
			this._userApi
			.login(values, 'user', true)
			.subscribe(result => {
				this.setUserFromApi()
				.subscribe(result => {
					resolve(result);
				}, err => reject(err));
			});
		});

		return Observable.fromPromise(promise);
	}

	isAuthenticated() {
		return this._userApi.isAuthenticated();
	}

	// custom
	setUserFromApi() {
		let user = null;
		let promise = new Promise((resolve, reject) => {
			if(!this.isAuthenticated()) {
				return resolve(false);
			}

			this._userApi.getCurrent()
			.subscribe((user:User) => {
				user = user;

				this.user = user;

				resolve(this.user);

				this.authenticated.emit(true);
				this.userUpdated.emit(true);
			}, err => reject(err));
		});

		return Observable.fromPromise(promise);
	}

	posts() {
		return this._userApi.getPosts(this.user.id, { include: ['votes'] });
	}

}
