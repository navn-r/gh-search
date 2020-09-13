import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TOKEN} from './models/gh-token';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  token: string = TOKEN;

  constructor(private http: HttpClient) {}

  getUsers(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${name}`, {
      headers: {
        authorization: `token ${this.token}`,
      },
    });
  }

  getUser(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}`, {
      headers: {
        authorization: `token ${this.token}`,
      },
    });
  }

  getFollowing(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/following`, {
      headers: {
        authorization: `token ${this.token}`,
      },
    });
  }
  getFollowers(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/followers`, {
      headers: {
        authorization: `token ${this.token}`,
      },
    });
  }
  getRepos(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/repos`, {
      headers: {
        authorization: `token ${this.token}`,
      },
    });
  }
}
