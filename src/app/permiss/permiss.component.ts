import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PermissService } from './permiss.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal/dialogModal/index'
import { ConfirmWindowComponent } from '../common/modal/confirm-modal'

@Component({
  selector: 'app-permiss',
  templateUrl: './permiss.component.html',
  styleUrls: ['./permiss.component.less'],
  providers: [PermissService]
})

export class PermissComponent implements OnInit {
  name: any;
  id: any;
  code: any;
  data: Object;
  bsModalRef: BsModalRef;
  keywords:String = ''
  params: any = {
    pageNo: 1,
    pageSize: 10
  };
  username:String;
  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private PermissService: PermissService,
     private modalService: BsModalService
    ) {
  }
  // @ViewChild('template')
  // template: TemplateRef<any>;

  // ngAfterViewInit() {
  //   console.dir(this.template);
  // }

  // 初始化
  ngOnInit(): void {
    this.route.params.subscribe((params) => this.username = params.username);
    this.getList(this.params);
  }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalContentComponent,{});
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
  // 跳转
  goRouter(){
    setTimeout(() => {
      this.router.navigate(['/settings']);
    }, 5000)
  }
  // 获取列表
  getList(params: Object): void {
    this.PermissService.getList(params)
      .subscribe(data => {
        this.data = data
      })
  }
  // 搜索
  search(name: String): void {
    this.params.keyword = name;
    this.getList(this.params)
  }
  // 展示编辑
  showEdit( item: Object):void{
    this.openModal();
    this.bsModalRef.content.item = item;
  }
  // 确认删除
  delete(id: String): void {
   this.openComfirmModal(id)
  }
  // 删除
  private removeItem(id:String){
    this.PermissService.delete(id)
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


