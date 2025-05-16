import { Component } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ToggleMessageComponent } from './toggle-message/toggle-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ComponentOneComponent, ComponentTwoComponent, ToggleMessageComponent],
})
export class AppComponent {
  title = 'my-angular19-app';
}
