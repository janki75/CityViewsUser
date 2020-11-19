import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintComponent } from './mycomplaint.component';

describe('MycomplaintComponent', () => {
  let component: MycomplaintComponent;
  let fixture: ComponentFixture<MycomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
