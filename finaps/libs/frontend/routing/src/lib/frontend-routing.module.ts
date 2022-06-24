import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../../../feat/home/src/lib/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'strava',
    loadChildren: () =>
      import('../../../feat/strava/src/lib/frontend-feat-strava.module').then(
        (m) => m.FrontendFeatStravaModule
      ),
  },
  {
    path: 'rijks',
    loadChildren: () =>
      import('../../../feat/rijks/src/lib/frontend-feat-rijks.module').then(
        (m) => m.FrontendFeatRijksModule
      ),
  },
  //   { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
