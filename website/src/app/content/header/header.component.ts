import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

// services
import { LogService, UserService } from '../../services';

// sdk
import { User } from '../../sdk';

@Component({
	selector: 'base-header',
	templateUrl: './header.component.html',
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit{
	public user:User;

	constructor(private _user:UserService, private _log:LogService) {}

	ngOnInit() {
		this.user = this._user.user;
		this._user.userUpdated
		.subscribe(() => {
			this.user = this._user.user;
		});
	}
}
