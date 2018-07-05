import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'comfirm-modal-content',
  templateUrl: './index.html',
  providers: []
})

export class ConfirmWindowComponent {
  public onClose: any;
  constructor() {}
  confirm(): void {
    this.onClose('yes')
  }

  decline(): void {
    this.onClose('')
  }
}
