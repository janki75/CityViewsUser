import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatdetailComponent } from './flatdetail.component';

describe('FlatdetailComponent', () => {
  let component: FlatdetailComponent;
  let fixture: ComponentFixture<FlatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
