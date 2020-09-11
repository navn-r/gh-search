import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Github Search';

  searchQuery: string;

  recieveQuery($event: string) {
    this.searchQuery = $event;
  }
}
