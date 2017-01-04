import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// sdk
import { UserService } from '../user.service';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
	constructor(private _router:Router, private _user: UserService) {}

	doCheck() {
		if(this._user.isAuthenticated()) {
			return true;
		}

		this._router.navigate(['/login']);
		return false;
	}

	canActivateChild() {
		return this.doCheck();
	}

	canActivate() {
		return this.doCheck();
	}
}
