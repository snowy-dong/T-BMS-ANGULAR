import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FileService{
  constructor(private http: HttpClient) {
  }
  upload(data) {
    return this.http.post('http://ngx-uploader.com/upload', data);
  }
}
