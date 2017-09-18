import {Component, Host, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {NeLayoutComponent} from './ne-layout.component';

@Component({
  selector: 'ne-layout-west',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: [
    './styles/ne-layout-west.scss'
  ]
})
export class NeLayoutWestComponent implements OnInit {

  private dimensionMap = {
    xl: '1600px',
    lg: '1200px',
    md: '992px',
    sm: '768px',
    xs: '480px',
  };

  @Input() breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'xs';

  @HostBinding('class.ne-layout-west-collapsed')
  collapsed = false;

  constructor(@Host() private neLayoutComponent: NeLayoutComponent) {
    if (this.neLayoutComponent) {
      neLayoutComponent.direction = 'row';
    }
  }

  ngOnInit(): void {
    this.onWindowResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(e) {
    if (this.breakpoint) {
      this.collapsed = window.matchMedia(`(max-width: ${this.dimensionMap[this.breakpoint]})`).matches;
    }
  }


}
