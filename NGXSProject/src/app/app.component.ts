import { Component } from '@angular/core';
import { CountState } from './count.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NGXSProject';
  constructor(public count: CountState) {}
}
