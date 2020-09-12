import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '../../models/gh-user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor() {}

  @Input()
  user: GithubUser;

  ngOnInit(): void {}

  navigate() {
    
  }
}
