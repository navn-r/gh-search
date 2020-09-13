import { Component, OnInit, Input } from '@angular/core';
import { GithubRepo } from 'src/app/models/gh-repo';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input()
  repo: GithubRepo;

  constructor() { }

  ngOnInit(): void {
  }

}
