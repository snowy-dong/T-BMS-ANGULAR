import { NgModule }           from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActiveComponent }     from './active.component';
import { ActiveService }       from './active.service';
import { ActiveRoutingModule } from './active.routing.module';
// 文件上传
import { NgUploaderModule } from 'ngx-uploader';

@NgModule({
  imports:      [
    ActiveRoutingModule,
    FormsModule,
    CommonModule,
    NgUploaderModule
  ],
  declarations: [ ActiveComponent ],
  providers:    [ ActiveService ]
})
export class ActiveModule { }
