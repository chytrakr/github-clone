import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
  constructor(private http: HttpClient) { }

  fetchTableData(url): Promise<any> {
    return this.http.get(url, { headers: { Authorization: 'token <github_oauth_token', 'Content-Type': 'application/json'}}).toPromise();
  }
}
