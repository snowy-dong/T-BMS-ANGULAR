import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { GoodsComponent }     from './goods.component';
import { GoodsService }       from './goods.service';
import { GoodsRoutingModule } from './goods.routing.module';

@NgModule({
  imports:[
    CommonModule,
    GoodsRoutingModule
   ],
  declarations: [ GoodsComponent ],
  providers:    [ GoodsService ]
})
export class GoodsModule { }
