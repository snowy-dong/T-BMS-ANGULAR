import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {
  }
  add(data) {
    return this.http.post('/api/role', data);
  }
  getList(params) {
    return this.http.get('/api/role/list', { params: params });
  }
  getDetail(id) {
    return this.http.get('/api/role/' + id);
  }
  edit(id, data) {
    return this.http.put('/api/role/' + id, data);
  }
  delete(id) {
    return this.http.delete('/api/role/' + id);
  }
}
