import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [],
  exports: [MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ]

})
export class MaterialModule { }
