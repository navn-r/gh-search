import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchQuery: string;

  recieveQuery($event: string) {
    this.searchQuery = $event;
  }
}
