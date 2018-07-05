import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FETCH_LATENCY = 500;
@Injectable()
export class CategoryService{
  constructor(private http:HttpClient ){
  }
  getContacts() {
    return this.http.get('/api/');
  }
}
