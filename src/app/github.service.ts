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
        authorization: `token 372b90e1f154e5545f85514aca30fd7e333b4831`,
      },
    });
  }

  getUser(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}`, {
      headers: {
        authorization: `token 372b90e1f154e5545f85514aca30fd7e333b4831`,
      },
    });
  }

  getFollowing(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/following`, {
      headers: {
        authorization: `token 372b90e1f154e5545f85514aca30fd7e333b4831`,
      },
    });
  }
  getFollowers(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/followers`, {
      headers: {
        authorization: `token 372b90e1f154e5545f85514aca30fd7e333b4831`,
      },
    });
  }
  getRepos(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/repos`, {
      headers: {
        authorization: `token 372b90e1f154e5545f85514aca30fd7e333b4831`,
      },
    });
  }
}
