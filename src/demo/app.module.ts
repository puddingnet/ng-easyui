import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgEasyuiModule} from '../app/ng-easyui.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgEasyuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
