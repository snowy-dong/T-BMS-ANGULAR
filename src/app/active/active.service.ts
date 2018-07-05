import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ActiveService{
  constructor(private http: HttpClient) {
  }
  download() {
    return this.http.get('/api/download');
  }
}
