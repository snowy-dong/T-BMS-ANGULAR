import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorage } from '../session.storage';
/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  public Token:String = ''
  public eventEmit: any;
  constructor(private sessionStorage:SessionStorage) {
    this.eventEmit = new EventEmitter();
  }
  public getAuthorizationToken():any {
    if(this.Token){
      return this.Token;
    }else{
      this.Token = this.sessionStorage.get('token') ? this.sessionStorage.get('token') : '';
      return this.Token;
    }

  }
  public setAuthorizationToken(token):void{
    this.sessionStorage.set('token', token);
    this.Token = token
  }
}
