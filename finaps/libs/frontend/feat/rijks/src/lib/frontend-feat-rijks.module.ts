import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RijksHomeComponent } from './rijks-home/rijks-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RijksHomeComponent,
      },
    ]),
  ],
})
export class FrontendFeatRijksModule {}
