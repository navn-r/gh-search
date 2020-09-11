import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../github.service';
import { GithubUser } from '../../models/gh-user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  @Input()
  name: string;

  user: GithubUser;

  ngOnInit(): void {
    this.getUser(this.name);
  }

  getUser(name: string): void {
    this.githubService.getUser(name).subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

  getAvatarImage() {
    return {
      'background-image': `url('${this.user.avatar_url}')`,
      'background-size': 'cover',
    };
  }
}
