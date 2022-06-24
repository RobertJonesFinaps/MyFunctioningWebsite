import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StravaHomeComponent } from './strava-home/strava-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StravaHomeComponent,
      },
    ]),
  ],
})
export class FrontendFeatStravaModule {}
