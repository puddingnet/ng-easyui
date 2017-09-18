import {NgModule} from '@angular/core';

import {NeLayoutModule} from './ne-layout/ne-layout.module';
import {NeMenuModule} from './ne-menu/ne-menu.module';

export {NeLayoutModule} from './ne-layout/ne-layout.module';
export {NeMenuModule} from './ne-menu/ne-menu.module';

@NgModule({
  exports: [
    NeLayoutModule,
    NeMenuModule
  ]
})

export class NgEasyuiModule {
}
