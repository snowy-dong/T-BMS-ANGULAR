import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.less']
})
export class GoodsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = Observable.of('foo', 'bar');
    //map to inner observable and flatten
    const example = source.mergeMap(val => Observable.of(`${val} World!`));
    const subscribe = example.subscribe(val => console.log(val));
    this.Subject()
    this.create()
    this.subscribe()
  }
  Subject(){
    var myObservable = new Subject();
    myObservable.subscribe(value => console.log('Subject可以多播1' + value));
    myObservable.subscribe(value => console.log('Subject可以多播2' + value));
    myObservable.next('foo');
    myObservable.next('foo1');
  }
  create(){
    var observable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    console.log('just before subscribe');
   var subscription =  observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
    subscription.unsubscribe();
  }
  subscribe(){
    var observable1 = Observable.interval(400);
    var observable2 = Observable.interval(300);

    var subscription = observable1.subscribe(x => console.log('first: ' + x));

    var childSubscription = observable2.subscribe(x => console.log('second: ' + x));

    subscription.add(childSubscription);

    setTimeout(() => {
      // subscription 和 childSubscription 都会取消订阅
      subscription.unsubscribe();
    }, 1000);
  }
}
