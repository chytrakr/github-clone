import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
  constructor(private http: HttpClient) { }

  fetchTableData(url): Promise<any> {
    return this.http.get(url, { headers: { Authorization: 'token 69b431bf1caf5f559057db987b8adad89aa1932e', 'Content-Type': 'application/json'}}).toPromise();
  }
}
