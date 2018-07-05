import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ActiveComponent }    from './active.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ActiveComponent }
  ])],
  exports: [RouterModule]
})
export class ActiveRoutingModule {}
