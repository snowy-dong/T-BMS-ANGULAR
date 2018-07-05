import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category.routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, ModalModule, AccordionModule } from 'ngx-bootstrap';
// or
@NgModule({
  imports: [CommonModule, CategoryRoutingModule, FormsModule, ModalModule.forRoot(), AccordionModule.forRoot(), ButtonsModule.forRoot()],
  declarations: [CategoryComponent],
})
export class CategoryModule {

}
