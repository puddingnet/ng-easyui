import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeLayoutCenterComponent } from './ne-layout-center.component';

describe('NeLayoutCenterComponent', () => {
  let component: NeLayoutCenterComponent;
  let fixture: ComponentFixture<NeLayoutCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeLayoutCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeLayoutCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
