import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/github.service';
import { GithubUser } from 'src/app/models/gh-user';
import { GithubRepo } from 'src/app/models/gh-repo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private githubService: GithubService, private snackBar: MatSnackBar) { }

  name: string = "";
  user: GithubUser;
  followers: GithubUser[];
  following: GithubUser[];
  repos: GithubRepo[];

  currIndex: number = 0;

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.currIndex = 0;
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

  changeTab($event: MatTabChangeEvent): void {
    this.currIndex = +$event;
  }

  getUser(name: string): void {
    this.githubService.getUser(name).subscribe(res => this.user = res, err => this.snackBar.open(err.status +  ' ' + err.statusText, "DAMN"));
  }

  getFollowers(name: string): void {
    this.githubService.getFollowers(name).subscribe(res => this.followers = res, err => this.snackBar.open(err.status +  ' ' + err.statusText, "DAMN"));
  }
  
  getFollowing(name: string): void {
    this.githubService.getFollowing(name).subscribe(res => this.following = res, err => this.snackBar.open(err.status +  ' ' + err.statusText, "DAMN"));
  }

  getRepos(name: string): void {
    this.githubService.getRepos(name).subscribe(res => this.repos = res, err => this.snackBar.open(err.status +  ' ' + err.statusText, "DAMN"));
  }

}
