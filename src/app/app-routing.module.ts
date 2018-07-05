import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AuthGuard } from './common/service/auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: '/Account', pathMatch: 'full' },
  { path: 'Account',loadChildren: 'app/account/account.module#AccountModule',canActivate: [AuthGuard]},
  { path: 'Category',loadChildren: 'app/category/category.module#CategoryModule',canActivate: [AuthGuard]},
  { path: 'Goods',loadChildren: 'app/goods/goods.module#GoodsModule',canActivate: [AuthGuard]},
  { path: 'Active',loadChildren: 'app/active/active.module#ActiveModule',canActivate: [AuthGuard]},
  { path: 'Order',loadChildren: 'app/order/order.module#OrderModule',canActivate: [AuthGuard]},
  { path: 'Role',loadChildren: 'app/role/role.module#RoleModule',canActivate: [AuthGuard]},
  { path: 'Permiss',loadChildren: 'app/permiss/permiss.module#PermissModule',canActivate: [AuthGuard]},
  { path: 'Statistics',loadChildren: 'app/statistics/statistics.module#StatisticsModule',canActivate: [AuthGuard]},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
