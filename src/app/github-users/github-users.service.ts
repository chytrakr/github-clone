import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
  constructor(private http: HttpClient) { }

  fetchTableData(url): Promise<any> {
    return this.http.get(url, { headers: { Authorization: 'token 31258820d06ef8c2a99ca60ecb14c8c51ffc5384', 'Content-Type': 'application/json'}}).toPromise();
  }
}
