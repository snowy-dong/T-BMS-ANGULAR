import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { PermissComponent } from './permiss.component';
import { ModalContentComponent } from './modal/dialogModal/index'
import { PermissRoutingModule } from './permiss.routing.module';
// or
@NgModule({
  imports: [
    CommonModule,
    PermissRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [PermissComponent, ModalContentComponent],
  entryComponents:[PermissComponent, ModalContentComponent]
})
export class PermissModule {

}
