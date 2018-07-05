import { Component,TemplateRef , OnInit, NgModule } from '@angular/core';
import { CategoryService} from './category.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less'],
  providers: [ CategoryService ]
})

export class CategoryComponent implements OnInit {
  public keywords:String = ''
  modalRef: BsModalRef;
  constructor(private CategoryService: CategoryService,private modalService: BsModalService) {
  }
  openModal(template: TemplateRef<any>) {
    console.log(this);
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    // this.CategoryService.getContacts()
    // .subscribe(data => {
    //   console.log(data)
    // })
  }
  search(name:String){
    // let name = name.trim();
    console.log(name);
  }
}

