import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'loading',
	templateUrl: './loading.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoadingComponent {
	@Input('fullscreen') fullscreen:boolean = false;
	@Input('size') size:'large'|'medium'|'small' = 'large';
	@Input('fullWidth') fullWidth:boolean = false;
}
