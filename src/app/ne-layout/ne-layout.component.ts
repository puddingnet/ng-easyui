import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'ne-layout',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: [
    `./styles/ne-layout.less`
  ]
})

export class NeLayoutComponent {

  direction: 'column' | 'row' = 'column';

  @HostBinding('style.flex-direction')
  get flexDirection() {
    return this.direction;
  }

}
