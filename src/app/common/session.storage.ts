import {Provider, PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
export class SessionStorage {

    public sessionStorage:any;
    public platform:any;
    constructor( @Inject(PLATFORM_ID) private platformId: Object,) {
      this.platform = isPlatformBrowser(platformId) ?'browser' : 'server';
      if(this.platform ==='browser'){
        if (!sessionStorage) {
          throw new Error('Current browser does not support Local Storage');
      }
          this.sessionStorage = sessionStorage;
      }else{
        this.sessionStorage = this.sessionStorage ? this.sessionStorage :{};
      }
    }
    public set(key:string, value:string):void {
        this.sessionStorage[key] = value;
    }

    public get(key:string):string {
        return this.sessionStorage[key] || false;
    }

    public setObject(key:string, value:any):void {
        this.sessionStorage[key] = JSON.stringify(value);
    }

    public getObject(key:string):any {
        return JSON.parse(this.sessionStorage[key] || '{}');
    }

    public remove(key:string):any {
        this.sessionStorage.removeItem(key);
    }
}
