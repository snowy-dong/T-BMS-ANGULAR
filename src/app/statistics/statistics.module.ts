import { NgModule }           from '@angular/core';
import { StatisticsComponent }     from './statistics.component';
import { StatisticsService }       from './statistics.service';
import { StatisticsRoutingModule } from './statistics.routing.module';

@NgModule({
  imports:      [ StatisticsRoutingModule ],
  declarations: [ StatisticsComponent ],
  providers:    [ StatisticsService ]
})
export class StatisticsModule { }
