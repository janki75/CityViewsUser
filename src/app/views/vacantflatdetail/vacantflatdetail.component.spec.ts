import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantflatdetailComponent } from './vacantflatdetail.component';

describe('VacantflatdetailComponent', () => {
  let component: VacantflatdetailComponent;
  let fixture: ComponentFixture<VacantflatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantflatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantflatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
