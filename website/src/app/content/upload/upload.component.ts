import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'upload-post',
	templateUrl: './upload.component.html',
	encapsulation: ViewEncapsulation.None
})
export class UploadComponent {
	public items;

	constructor(){}
}
