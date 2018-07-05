import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule, BsDatepickerModule  } from 'ngx-bootstrap';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';
import { ExeBackgroundDirective } from '../common/Directive/exeBackground'
import { UnlessDirective } from '../common/Directive/exeUnless'
import { ChildComponent } from '../common/component/child.component'
import { ViewEncapsulationNoneComponent } from '../common/component/ViewEncapsulation/ViewEncapsulation.None'
import { ViewEncapsulationEmulatedComponent } from '../common/component/ViewEncapsulation/ViewEncapsulation.Emulated'
import { ViewEncapsulationNativeComponent } from '../common/component/ViewEncapsulation/ViewEncapsulation.Native'
import { InputCounterComponent } from '../common/@Input/counter.component'
import { OuputCounterComponent } from '../common/@Output/counter.component'
import { NgxSelectModule } from 'ngx-select-ex';
import { ModalContentComponent } from './modal/dialogModal/index'
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    NgxSelectModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()],
  declarations: [
    AccountComponent,
    ExeBackgroundDirective,
    UnlessDirective,
    ChildComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNativeComponent,
    InputCounterComponent,
    OuputCounterComponent,
    ModalContentComponent
  ],
  entryComponents:[AccountComponent, ModalContentComponent],
})
export class AccountModule { }
