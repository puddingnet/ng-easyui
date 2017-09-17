import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeLayoutWestComponent } from './ne-layout-west.component';

describe('NeLayoutWestComponent', () => {
  let component: NeLayoutWestComponent;
  let fixture: ComponentFixture<NeLayoutWestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeLayoutWestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeLayoutWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
