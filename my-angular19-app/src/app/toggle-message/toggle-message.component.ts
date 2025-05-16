import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-message',
  templateUrl: './toggle-message.component.html',
  styleUrls: ['./toggle-message.component.css'],
  standalone: true,
})
export class ToggleMessageComponent {
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
