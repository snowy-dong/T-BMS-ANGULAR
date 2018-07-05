import { NgModule }           from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderComponent }     from './order.component';
import { OrderService }       from './order.service';
import { OrderRoutingModule } from './order.routing.module';

@NgModule({
  imports:      [ FormsModule, OrderRoutingModule ],
  declarations: [ OrderComponent ],
  providers:    [ OrderService ]
})
export class OrderModule { }
