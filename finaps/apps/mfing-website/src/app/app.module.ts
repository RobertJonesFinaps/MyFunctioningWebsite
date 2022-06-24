import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrontendRoutingModule } from '@finaps/frontend/routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FrontendRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
