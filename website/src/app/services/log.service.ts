import { Injectable, EventEmitter } from '@angular/core';

// dependencies
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class LogService {

	constructor(private _notification:NotificationsService) {}

	error(err, notification:boolean=true) {

		if(notification) {
			this._notification.error(
				'Oops!',
				'Er is iets fout gegaan. Als het probleem zich vaker voordoet, neem dan contact op via info@superbuddy.nl.',
				{ timeout: false });
		}

		// console.log('Something weird happened, report this to development@superbuddy.nl', err);
		console.log(err);
	}
}
