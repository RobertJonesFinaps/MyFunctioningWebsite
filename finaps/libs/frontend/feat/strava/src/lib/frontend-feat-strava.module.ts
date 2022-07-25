import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StravaHomeComponent } from './strava-home/strava-home.component';
import { RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { DataBoiComponent } from './data-boi/data-boi.component';
import { HttpClientModule } from '@angular/common/http';
import { StravaAuthenticatorService } from './strava-authenticator/strava-authenticator.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: StravaHomeComponent,
      },
      {
        path: 'redirect',
        component: RedirectComponent,
      },
      {
        path: 'data-boi',
        component: DataBoiComponent,
      },
    ]),
  ],
  providers: [StravaAuthenticatorService],
  declarations: [RedirectComponent, DataBoiComponent],
})
export class FrontendFeatStravaModule {}
