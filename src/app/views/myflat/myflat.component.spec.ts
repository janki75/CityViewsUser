import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyflatComponent } from './myflat.component';

describe('MyflatComponent', () => {
  let component: MyflatComponent;
  let fixture: ComponentFixture<MyflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
