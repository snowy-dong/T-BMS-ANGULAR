import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from './common/service/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'app';
  isLogin:Boolean
  constructor(private router:Router, private auth: AuthService){}
  ngOnInit(): void {
    // 接收发射过来的数据
    this.auth.eventEmit.subscribe((value: any) => {
      if(value == "loginOut") {
          this.isLogin = false;
      }else if(value === 'login'){
          this.isLogin = true;
      }
    });
    if(this.auth.getAuthorizationToken()){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
  logout(){
    this.isLogin = false;
    this.auth.setAuthorizationToken('')
    this.router.navigate(['Login'])
  }
}
