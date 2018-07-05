import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';

@Injectable()
export class ScoketService {

    constructor(private socket: Socket) {}

    getMessage(key: string) {
      return this.socket
          .fromEvent<any>(key)
          .map(data => data.msg);
  }

  sendMessage(key: string, msg: string) {
      this.socket
          .emit(key, msg);
  }
    close() {
      this.socket.disconnect()
    }
}
