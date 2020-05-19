import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = false;
  title = 'Tour of Heroes';

  toggle(): void {
    this.opened = !this.opened;
  }
}
