import { Component, Input, SimpleChanges, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit , AfterViewChecked ,OnDestroy } from '@angular/core';

@Component({
    selector: 'exe-child',
    template: `
      <p>Child Component</p>
      <p>{{ name }}</p>
    `
})
export class ChildComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit ,  AfterViewChecked , OnDestroy {
    @Input()
    name: string;

    ngOnChanges(changes: SimpleChanges) {
        console.dir(changes);
    }
    ngDoCheck (){
      console.log('ngDoCheck ')
        // this.name = 'exe-child-component-1'
    }
    ngAfterContentInit(){
      // console.log('ngAfterContentInit hook has been called');
    }
    ngAfterContentChecked(){
      // console.log('ngAfterContentChecked hook has been called');
    }
    ngAfterViewInit (){
      // console.log('ngAfterViewInit hook has been called');
    }
    ngAfterViewChecked() {
      // console.log('ngAfterViewChecked hook has been called');
    }
    ngOnDestroy(){
      // console.log('ngOnDestroy hook has been called');
    }
}
