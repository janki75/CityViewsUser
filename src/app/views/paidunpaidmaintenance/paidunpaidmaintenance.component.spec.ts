import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidunpaidmaintenanceComponent } from './paidunpaidmaintenance.component';

describe('PaidunpaidmaintenanceComponent', () => {
  let component: PaidunpaidmaintenanceComponent;
  let fixture: ComponentFixture<PaidunpaidmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidunpaidmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidunpaidmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
