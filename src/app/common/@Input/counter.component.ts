import {Component,Input} from '@angular/core'
@Component({
  selector:'input-counter',
  template:` <p>input-counter当前值: {{ count }}</p>
  <button (click)="increment()"> + </button>
  <button (click)="decrement()"> - </button>`,
  styles:[],
  // inputs:['count:value']
})
export class InputCounterComponent {
  @Input() count:number = 0 //坚持把 @Input 或者 @Output 放到所装饰的属性的同一行：如果需要重命名与@Input或者@Output关联的属性或事件名，你可以在一个位置修改。
  constructor(){}
  increment(){
    this.count++
  }
  decrement(){
    this.count--
  }
}
