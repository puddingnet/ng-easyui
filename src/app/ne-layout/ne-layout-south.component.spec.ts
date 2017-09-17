import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeLayoutSouthComponent } from './ne-layout-south.component';

describe('NeLayoutFooterComponent', () => {
  let component: NeLayoutSouthComponent;
  let fixture: ComponentFixture<NeLayoutSouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeLayoutSouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeLayoutSouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
