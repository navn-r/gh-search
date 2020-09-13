import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/github.service';
import { GithubUser } from 'src/app/models/gh-user';
import { GithubRepo } from 'src/app/models/gh-repo';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  name: string = "";
  user: GithubUser;
  followers: GithubUser[];
  following: GithubUser[];
  repos: GithubRepo[];

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.getUser(this.name);
      this.getFollowers(this.name);
      this.getFollowing(this.name);
      this.getRepos(this.name);
    });
    this.getUser(this.name);
    this.getFollowers(this.name);
    this.getFollowing(this.name);
    this.getRepos(this.name);
  }

  getUser(name: string): void {
    this.githubService.getUser(name).subscribe(res => this.user = res, err => console.log(err));
  }

  getFollowers(name: string): void {
    this.githubService.getFollowers(name).subscribe(res => this.followers = res, err => console.log(err));
  }
  
  getFollowing(name: string): void {
    this.githubService.getFollowing(name).subscribe(res => this.following = res, err => console.log(err));
  }

  getRepos(name: string): void {
    this.githubService.getRepos(name).subscribe(res => this.repos = res, err => console.log(err));
  }

}
