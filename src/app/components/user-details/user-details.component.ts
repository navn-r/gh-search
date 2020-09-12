import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/github.service';
import { GithubUser } from 'src/app/models/gh-user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  name: string = "";
  user: GithubUser;

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
    this.getUser(this.name);
  }

  getUser(name: string): void {
    this.githubService.getUser(name).subscribe(res => this.user = res, err => console.log(err));
  }

}
