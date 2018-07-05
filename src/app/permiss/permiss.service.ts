import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PermissService {
  constructor(private http: HttpClient) {
  }
  add(data) {
    return this.http.post('/api/permiss', data);
  }
  getList(params) {
    return this.http.get('/api/permiss/list', { params: params });
  }
  edit(id, params) {
    return this.http.put('/api/permiss/' + id, { params: params });
  }
  delete(id) {
    return this.http.delete('/api/permiss/' + id);
  }
}
