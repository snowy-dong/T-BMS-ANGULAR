import { NgModule }            from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { PermissComponent }    from './permiss.component';

const PermissRoute: Routes = [
  { path: '', component: PermissComponent },
];
@NgModule({
  imports: [RouterModule.forChild(PermissRoute)],
  exports: [RouterModule]
})
export class PermissRoutingModule {}
