import { Component, ViewEncapsulation, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { ValidationService, LogService, UserService } from '../../services';

// dependencies
import { NotificationsService } from 'angular2-notifications';

// sdk
import { User } from '../../sdk';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy{
	private body;
	private loginForm:FormGroup;
	private registerForm:FormGroup;

	public isRegister:boolean = false;
	public submitted:boolean = false;

	constructor(private _router:Router, private _fb:FormBuilder, private _notification:NotificationsService, private _cv:ValidationService, private _log:LogService, private _user:UserService) {}

	ngOnInit() {
		this.body = document.getElementsByTagName('body')[0];
		this.body.classList.add("login");

		this.loginForm = this._fb.group({
        	username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        	password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
        });

		this.registerForm = this._fb.group({
        	username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)], [this._cv.usernameUnique()]],
        	email: ['', [Validators.required, Validators.minLength(3), this._cv.email], [this._cv.emailUnique()]],
        	tos: [false, [Validators.required]],
        	passwords: this._fb.group({
        		password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), this._cv.validPassword]],
        		repeat: ['', [Validators.required]]
        	}, {validator: this._cv.equal})
        });
	}

	login(loginData:any = false) {
		if(this.loginForm.valid || loginData) {
			this.submitted = true;

			let postData = loginData ? loginData : this.loginForm.value;
			this._user
			.login(postData)
			.subscribe(
				(user:User) => {
					this._notification.success('Ingelogd', 'Hallo ' + user.username + '!');
            		this._router.navigate(['/']);
				},
				err => {
					this._log.error(err);
	            	this.submitted = false;
	            }
			);

		}
	}

	register() {
		if(this.registerForm.valid) {
			this.submitted = true;

			let postData = {
				username: this.registerForm.value.username,
				email: this.registerForm.value.email,
				password: this.registerForm.value.passwords.password
			};

			this._user
			.register(postData)
			.subscribe(result => {
				this.login(postData);
			}, err => {
				this._log.error(err);
				this.submitted = false;
			});
		}
	}

	ngOnDestroy() {
		this.body.classList.remove("login");
	}
}
