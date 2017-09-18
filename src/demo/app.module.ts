import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgEasyuiModule} from '../components/ng-easyui.module';
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
