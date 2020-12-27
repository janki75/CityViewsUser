import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantflatComponent } from './vacantflat.component';

describe('VacantflatComponent', () => {
  let component: VacantflatComponent;
  let fixture: ComponentFixture<VacantflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
