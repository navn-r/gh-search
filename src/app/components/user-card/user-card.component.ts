import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '../../models/gh-user';
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input()
  user: GithubUser;

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate([`/users/${this.user.login}`]);
  }
}
