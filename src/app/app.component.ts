import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Github Search';

  //TODO: REMOVE
  searchQuery: string = 'navn-r';

  recieveQuery($event: string) {
    this.searchQuery = $event;
  }
}
