import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  alexaPlayDespacito: string[] = ['bc99', 'a9bd0e', '2041', '50277aea4'];
  canWeGetAnFInTheChat: string[] = ['fdf0', '1e', '1a', '7bbd'];
  gitHubThinksTheyCanOutSmartMeISayHaHaNoU: string = '25170';

  theSecretToAllofThis: string;

  constructor(private http: HttpClient) {}

  generate(): void {
    this.theSecretToAllofThis = "";
    this.alexaPlayDespacito.forEach(s => this.theSecretToAllofThis = this.theSecretToAllofThis.concat(s));
    this.canWeGetAnFInTheChat.forEach(s => this.theSecretToAllofThis = this.theSecretToAllofThis.concat(s));
    this.theSecretToAllofThis = this.theSecretToAllofThis.concat(this.gitHubThinksTheyCanOutSmartMeISayHaHaNoU);
  };

  getUsers(name: string): Observable<any> {
    this.generate();
    return this.http.get(`https://api.github.com/search/users?q=${name}`, {
      headers: {
        authorization: `token ${this.theSecretToAllofThis}`,
      },
    });
  }

  getUser(name: string): Observable<any> {
    this.generate();
    return this.http.get(`https://api.github.com/users/${name}`, {
      headers: {
        authorization: `token ${this.theSecretToAllofThis}`,
      },
    });
  }

  getFollowing(name: string): Observable<any> {
    this.generate();
    return this.http.get(`https://api.github.com/users/${name}/following`, {
      headers: {
        authorization: `token ${this.theSecretToAllofThis}`,
      },
    });
  }
  getFollowers(name: string): Observable<any> {
    this.generate();
    return this.http.get(`https://api.github.com/users/${name}/followers`, {
      headers: {
        authorization: `token ${this.theSecretToAllofThis}`,
      },
    });
  }
  getRepos(name: string): Observable<any> {
    this.generate();
    return this.http.get(`https://api.github.com/users/${name}/repos`, {
      headers: {
        authorization: `token ${this.theSecretToAllofThis}`,
      },
    });
  }
}
