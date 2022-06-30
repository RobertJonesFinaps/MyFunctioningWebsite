import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RijksHomeComponent } from './rijks-home/rijks-home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RijksHomeComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
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
