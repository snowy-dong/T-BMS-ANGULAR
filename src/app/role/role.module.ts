import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';
import { RoleComponent } from './role.component';
import { RoleService } from './role.service';
import { RoleRoutingModule } from './role.routing.module';
import { ModalContentComponent } from './modal/dialogModal/index'

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    NgxSelectModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [RoleComponent, ModalContentComponent],
  entryComponents:[RoleComponent, ModalContentComponent],
  providers: [RoleService]
})
export class RoleModule { }
