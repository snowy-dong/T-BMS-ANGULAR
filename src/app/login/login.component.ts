import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LoginService } from './login.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AuthService} from '../common/service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  public name:String;
  public password:String;
  public data:Object;
  constructor(private router: Router,private loginService:LoginService, private auth:AuthService) {}
  public ngOnInit(): void {

  }
  public login():void {
    let data = {
      name:this.name,
      password:this.password
    }
    this.loginService.login(data)
    .subscribe((data:any) => {
      this.data = data
      if(data.code === 'S200'){
        this.auth.setAuthorizationToken(data.data)
        this.auth.eventEmit.emit("login");
        this.router.navigate(['Account'])
      }else{
        this.auth.setAuthorizationToken('')
        this.auth.eventEmit.emit("loginOut");
        console.log(data.msg)
      }
    })
  }
}

