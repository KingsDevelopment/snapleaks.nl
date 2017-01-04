import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';

// routes
import { AppRoutes }  from './app.routes';

// Saitama-SDK
import { SDKBrowserModule } from './sdk';

// dependencies
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// services
import { UserService,
		ValidationService,
		LogService } from './services';

// guards
import { IsAuthenticatedGuard } from './services';


// components
import { LoadingComponent } from './content/loading/loading.component';
import { LoginComponent } from './content/login/login.component';
import { LogoutComponent } from './content/logout/logout.component';
import { HomeComponent } from './content/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		LoadingComponent,
		LoginComponent,
		LogoutComponent,
		HomeComponent
	],
	imports: [
		// sdk
		SDKBrowserModule.forRoot(),

		// angular
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		RouterModule,
		HttpModule,
		JsonpModule,

		// dependencies
		NgbModule.forRoot(),
		SimpleNotificationsModule,
		MomentModule,
		NgbModule.forRoot(),

		// additional routes, load in last. (Inccludes 404 for any additional weird page)
		RouterModule.forRoot(AppRoutes)
	],
	providers: [
		// services
		UserService,
		ValidationService,
		LogService,

		// guards
		IsAuthenticatedGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
