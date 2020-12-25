import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowunpaidmaintenanceComponent } from './showunpaidmaintenance.component';

describe('ShowunpaidmaintenanceComponent', () => {
  let component: ShowunpaidmaintenanceComponent;
  let fixture: ComponentFixture<ShowunpaidmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowunpaidmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowunpaidmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
