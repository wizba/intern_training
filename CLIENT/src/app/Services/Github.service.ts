import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {
Url='https://api.github.com/users';
constructor(private http: HttpClient) { }

  fetchData()
  {
    return this.http.get(this.Url);
  }
}
