import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeLayoutComponent } from './ne-layout.component';

describe('NeLayoutComponent', () => {
  let component: NeLayoutComponent;
  let fixture: ComponentFixture<NeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
