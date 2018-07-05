import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector:'output-counter',
  template: `
  <p>output-counter当前值: {{ count }}</p>
  <button (click)="increment()"> + </button>
  <button (click)="decrement()"> - </button>
`,
// outputs: ['change:countChange']
})

export class OuputCounterComponent{
  @Input() count: number = 0;
  // Output 装饰器支持一个可选的参数，用来指定组件绑定属性的名称。如果没有指定，则默认使用 @Output 装饰器，装饰的属性名
  @Output('change') change: EventEmitter<number> = new EventEmitter<number>();
  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
      this.count--;
      this.change.emit(this.count);
  }

}
