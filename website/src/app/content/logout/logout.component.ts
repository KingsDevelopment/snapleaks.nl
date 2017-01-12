import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// dependencies
import { NotificationsService } from 'angular2-notifications';

// sdk
import { LogService, UserService } from '../../services';

@Component({
	selector: 'logout',
	template: `<loading size="large" [fullscreen]="true"></loading>`,
	encapsulation: ViewEncapsulation.None
})
export class LogoutComponent {
	constructor(private _notification:NotificationsService, private _user: UserService, private _router: Router, private _log:LogService){
		this
		._user
		.logout()
		.subscribe(() => {}, err => this._log.error(err));

		this._router.navigate(['/login']);
        this._notification.success('Uitgelogd', 'Je bent nu uitgelogd!');
	}
}
