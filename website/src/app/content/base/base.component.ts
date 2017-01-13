import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'base',
	templateUrl: './base.component.html',
	encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {
	public paddingTop = '80px';
	@ViewChild('baseHeader') baseHeader:HeaderComponent;

	private headerElement;

	constructor() {}

	ngOnInit() {
		if(this.baseHeader && this.baseHeader.header && this.baseHeader.header.nativeElement) {
			this.headerElement = this.baseHeader.header.nativeElement;
			this.setPadding();
		}
	}

	setPadding() {
		let height = this.headerElement.scrollHeight;
		this.paddingTop = (height+5) + 'px';
	}

	@HostListener('window:resize', ['$event']) checkPadding(event) {
		this.setPadding();
	};
}
