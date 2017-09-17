import {NgModule} from '@angular/core';
import {NeLayoutComponent} from './ne-layout.component';
import {NeLayoutNorthComponent} from './ne-layout-north.component';
import {NeLayoutSouthComponent} from './ne-layout-south.component';
import { NeLayoutCenterComponent } from './ne-layout-center.component';
import { NeLayoutWestComponent } from './ne-layout-west.component';

@NgModule({
  declarations: [
    NeLayoutComponent,
    NeLayoutNorthComponent,
    NeLayoutSouthComponent,
    NeLayoutCenterComponent,
    NeLayoutWestComponent
  ],
  exports: [
    NeLayoutComponent,
    NeLayoutNorthComponent,
    NeLayoutSouthComponent,
    NeLayoutCenterComponent,
    NeLayoutWestComponent
  ]
})

export class NeLayoutModule {
}
