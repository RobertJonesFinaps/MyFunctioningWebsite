import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { FrontendFeatHomeModule } from '@finaps/frontend/feat/home';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@finaps/frontend/feat/home').then((m) => m.HomeComponent),
  },

  {
    path: 'strava',
    loadChildren: () =>
      import('@finaps/frontend/feat/strava').then(
        (m) => m.FrontendFeatStravaModule
      ),
  },
  {
    path: 'rijks',
    loadChildren: () =>
      import('@finaps/frontend/feat/rijks').then(
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
