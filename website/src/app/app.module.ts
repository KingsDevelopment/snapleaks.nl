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
import { MasonryModule } from 'angular2-masonry';
// import { TagInputModule } from 'ng2-tag-input';

// services
import { UserService,
		ValidationService,
		LogService,
		PostService } from './services';

// guards
import { IsAuthenticatedGuard } from './services';

// pipes
import { ShortenNumberPipe } from './pipes'

// components
import { LoadingComponent } from './content/loading/loading.component';
import { LoginComponent } from './content/login/login.component';
import { LogoutComponent } from './content/logout/logout.component';
import { BaseComponent } from './content/base/base.component';
import { UploadComponent } from './content/upload/upload.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { HomeComponent } from './content/home/home.component';
import { PostsComponent } from './content/posts/posts.component';
import { PostComponent } from './content/post/post.component';

@NgModule({
	entryComponents: [
		UploadComponent
	],
	declarations: [
		// pipes
		ShortenNumberPipe,

		// components
		AppComponent,
		LoadingComponent,
		LoginComponent,
		LogoutComponent,
		BaseComponent,
		UploadComponent,
		HeaderComponent,
		FooterComponent,
		SidebarComponent,
		HomeComponent,
		PostsComponent,
		PostComponent
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
		SimpleNotificationsModule.forRoot(),
		MomentModule,
		MasonryModule,
		// TagInputModule,

		// additional routes, load in last. (Inccludes 404 for any additional weird page)
		RouterModule.forRoot(AppRoutes)
	],
	providers: [
		// services
		UserService,
		ValidationService,
		LogService,
		PostService,

		// guards
		IsAuthenticatedGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
