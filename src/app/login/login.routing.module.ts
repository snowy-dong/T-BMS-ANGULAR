import { NgModule }            from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { LoginComponent }    from './login.component';

const LoginRoute: Routes = [
  { path: 'Login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forChild(LoginRoute)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
