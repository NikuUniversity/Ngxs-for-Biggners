import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountState } from './count.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CountState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsDataPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
