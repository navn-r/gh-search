import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUsers(name: string): Observable<any> {
    console.log(name);
    return this.http.get(`https://api.github.com/search/users?q=${name}`);
  }
}
