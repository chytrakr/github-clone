import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
  constructor(private http: HttpClient) { }

  fetchTableData(url): Promise<any> {
    return this.http.get(url, { headers: { Authorization: 'token 1c67eef47716d5b6f0a101cd664ba43dba595454'}}).toPromise();
  }
}
