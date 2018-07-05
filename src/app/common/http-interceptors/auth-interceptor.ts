import { Injectable } from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse} from "@angular/common/http";
import { Observable} from "rxjs/Observable";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import {Router} from "@angular/router"
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    // console.log(req)

    return next.handle(authReq).pipe(mergeMap((event: any) => {
      // console.log(event)
      if (event instanceof HttpResponse && event.body.code != 'S200') {
        if( event.body.code ==='S401'){
          this.auth.setAuthorizationToken('')
          this.auth.eventEmit.emit("loginOut");
          this.router.navigate(['Login'])
        }else{
         ErrorObservable.create(event);
        }
      }
      return Observable.create(observer => observer.next(event)); //请求成功返回响应
    }),
    catchError((res: HttpResponse<any>) => {   //请求失败处理
      switch (res.status) {
        case 401:
          break;
        case 200:
          console.log('业务错误');
          break;
        case 404:
          break;
        case 403:
          console.log('业务错误');
          break;
      }
      return ErrorObservable.create(event);
    }));
    // send cloned request with header to the next handler.
    // return next.handle(authReq);
  }
}
