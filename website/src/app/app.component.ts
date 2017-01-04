import { Component } from '@angular/core';

import { LoopBackConfig } from './sdk';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public toastOptions = {
		position: ['bottom', 'right'],
		timeOut: 5000,
		maxStacks: 3
	};

	public constructor() {
		LoopBackConfig.setBaseURL(environment.apiUrl);
	}
}
