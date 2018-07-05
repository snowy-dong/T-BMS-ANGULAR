import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissComponent } from './permiss.component';

describe('PermissComponent', () => {
  let component: PermissComponent;
  let fixture: ComponentFixture<PermissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
