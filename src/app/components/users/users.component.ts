import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../github.service';
import { GithubUser } from 'src/app/models/gh-user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private githubService: GithubService, private snackBar: MatSnackBar) {}

  @Input()
  searchQuery: string = "";

  users: GithubUser[]

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.searchQuery && this.searchQuery !== '') {
      this.getUsers(this.searchQuery);
    }
  }

  getUsers(query: string): void {
    this.githubService.getUsers(query).subscribe(res => {this.users = res.items; this.snackBar.open(`Found ${res.total_count} results.`, "Dismiss", {
      duration: 3000
    });}, err => console.log(err));
    
  }
}
