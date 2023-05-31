import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  show = true;

  showMessage(): void {
    this.show = !this.show; //toggle;
  }
  easterEgg(): void {
    window.confirm('É um easter egg!');
  }
}
