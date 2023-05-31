import { Component } from '@angular/core';

@Component({
  selector: 'app-ifrender',
  templateUrl: './ifrender.component.html',
  styleUrls: ['./ifrender.component.css'],
})
export class IfrenderComponent {
  canShow: boolean = true;
  name: string = 'Victor';
}
