import { Routes } from '@angular/router';

// guards
import { IsAuthenticatedGuard } from './services';

// components
import { LoginComponent } from './content/login/login.component';
import { LogoutComponent } from './content/logout/logout.component';
import { BaseComponent } from './content/base/base.component';

export const AppRoutes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [IsAuthenticatedGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'logout',
		component: LogoutComponent
	},
	{
		path: '**',
		redirectTo: '/404'
	}
];
