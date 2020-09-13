import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  
  constructor(private http: HttpClient) {}

  getUsers(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${name}`);
  }

  getUser(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}`);
  }

  getFollowing(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/following`);
  }
  getFollowers(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/followers`);
  }
  getRepos(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${name}/repos`);
  }
}
