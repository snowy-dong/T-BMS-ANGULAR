import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { RoleService } from './role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal/dialogModal/index'
import { ConfirmWindowComponent } from '../common/modal/confirm-modal'
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
  providers: [RoleService]
})
export class RoleComponent implements OnInit {
  permissList: Object;
  data: any;
  bsModalRef: BsModalRef;
  keywords:String = ''
  params: any = {
    pageNo: 1,
    pageSize: 10
  };
  constructor(
    private RoleService: RoleService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.getList(this.params);
  }
  // 弹窗
  openModal(id:any) {
    const initialState = {
      id: id
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.onClose = (myData) => {
      if(myData){
         this.bsModalRef.hide();
         this.getList(this.params);
      }
    };
  }
  openComfirmModal(id:String){
    this.bsModalRef = this.modalService.show(ConfirmWindowComponent,{});
    this.bsModalRef.content.onClose = (myData) => {
      if(myData){
         this.removeItem(id)
      }
      this.bsModalRef.hide();
    }
  }
  // 获取列表
  getList(params: Object): void {
    this.RoleService.getList(params)
      .subscribe(data => {
        this.data = data
      })
  }
  // 搜索
  search(name: String): void {
    this.params.keyword = name;
    this.getList(this.params)
  }
  // 编辑
  edit(id: String, obj: Object): void {
    this.openModal(id);
  }
  // 确认删除
  delete(id: String): void {
    this.openComfirmModal(id)
  }
  // 删除
  private removeItem(id:String){
    this.RoleService.delete(id)
      .subscribe(data => {
        this.getList(this.params);
      })
  }
  // 切换页码
  pageChanged(event: any): void {
    this.params.pageNo = event.page;
    this.getList(this.params);
  }

}
