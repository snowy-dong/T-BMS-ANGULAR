import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
// or
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [LoginComponent],
})
export class LoginModule {

}
