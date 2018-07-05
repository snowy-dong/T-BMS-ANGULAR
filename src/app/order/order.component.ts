import { Component, OnInit, NgModule } from '@angular/core';
import { ScoketService } from '../common/service/socket.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less'],
  providers: [ScoketService]
})
export class OrderComponent implements OnInit {
  msg: string;

    constructor(private scoketService : ScoketService) {}

    ngOnInit() {
      this.scoketService
          .getMessage("order")
          .subscribe(msg => {
            console.log(msg)
            this.msg = "1st "+msg;
          });
    }

    sendMsg(msg){
       this.scoketService.sendMessage("order",msg);
    }

}
