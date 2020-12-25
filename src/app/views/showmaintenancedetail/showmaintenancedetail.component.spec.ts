import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmaintenancedetailComponent } from './showmaintenancedetail.component';

describe('ShowmaintenancedetailComponent', () => {
  let component: ShowmaintenancedetailComponent;
  let fixture: ComponentFixture<ShowmaintenancedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmaintenancedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmaintenancedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
