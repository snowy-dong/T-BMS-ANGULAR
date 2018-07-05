import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AccountService} from '../../account.service'
import { RoleService } from '../../../role/role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'modal-content',
  templateUrl: './index.html',
  providers: [AccountService, RoleService,DatePipe]
})
export class ModalContentComponent implements OnInit {
  roleList: Object;
  id:any;
  permissList: any;
   params:any = {
    name:null,
    email:null,
    cellphone:null,
    joinDate:null,
    gender:null,
    role:[]

  }
   onClose: any;
  constructor(
    private bsModalRef: BsModalRef,
    private AccountService: AccountService,
    private RoleService:RoleService,
    private datePipe:DatePipe
    ) {}

  ngOnInit() {
    console.log('ngOnInit')
    this.getRole()
    if(this.id){
      this.getDetail(this.id)
    }
  }
  // 获取角色
   getRole(): void {
    this.RoleService.getList({})
      .subscribe((data:any) => {
        this.roleList = data.list
        console.log(data)
      })
  }
  // 保存
   saveModal(item){
    if(item.id){
      this.edit(item.id,item)
    }else{
      this.add(item)
    }
  }
  // 获取用户详情
  getDetail(id: String){
    this.AccountService.getDetail(id)
    .subscribe((data:any) => {
      this.params = data.data[0]
      let role=[];
      this.params.role.forEach((x,i) => {
        role.push(x.id)
      });
      this.params.role = role;
      console.log(data)
    })
  }
  // 编辑
   edit(id: String, item: any): void {
    item.joinDate = this.datePipe.transform(item.joinDate, 'yyyy-MM-dd');
    this.AccountService.edit(id, item)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
      })
  }
  // 添加用户
   add(item:any): void {
    item.joinDate = this.datePipe.transform(item.joinDate, 'yyyy-MM-dd');
    this.AccountService.add(item)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
      })
  }
}
