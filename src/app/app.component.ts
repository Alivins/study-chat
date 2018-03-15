import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
		message='';
		sendmessage = '';
	
	public sendMessage(): void {
		this.sendmessage = this.message;
	}
}
