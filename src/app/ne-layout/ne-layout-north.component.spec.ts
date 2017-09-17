import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeLayoutNorthComponent } from './ne-layout-north.component';

describe('NeLayoutHeaderComponent', () => {
  let component: NeLayoutNorthComponent;
  let fixture: ComponentFixture<NeLayoutNorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeLayoutNorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeLayoutNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
