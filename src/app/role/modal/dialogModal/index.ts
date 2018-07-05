import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { RoleService} from '../../role.service'
import { PermissService } from '../../../permiss/permiss.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'modal-content',
  templateUrl: './index.html',
  providers: [RoleService, PermissService]
})
export class ModalContentComponent implements OnInit {
  id:any;
  permissList: any;
  params={
    name:'',
    code:'',
    permiss:[]
  };
  onClose: any;
  constructor(
    private bsModalRef: BsModalRef,
    private RoleService: RoleService,
    private PermissService:PermissService
    ) {}

  ngOnInit() {
    console.log('ngOnInit')
    this.getPermiss()
    if(this.id){
      this.getDetail(this.id)
    }
  }
  // 获取权限
  getPermiss(): void {
    this.PermissService.getList({})
      .subscribe((data:any) => {
        this.permissList = data.list
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
  getDetail(id: String){
    this.RoleService.getDetail(id)
    .subscribe((data:any) => {
      this.params = data.data[0]
      let permiss=[];
      this.params.permiss.forEach((x,i) => {
        permiss.push(x.id)
      });
      this.params.permiss = permiss;
      // this.permissList= this.params.permiss
      // this.params.permiss =[1,3,6]
      console.log(data)
    })
  }
  // 编辑
  edit(id: String, obj: Object): void {
    this.RoleService.edit(id, obj)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
      })
  }
  // // 添加角色
  // addRole(obj: Object): void {
  //   this.RoleService.add(obj)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.bsModalRef.hide();
  //     })
  // }
  // 添加权限
  add(obj: Object): void {
    this.RoleService.add(obj)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
        // this.bsModalRef.hide();
      })
  }
}
