import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatDividerModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

const MAT_MODULES  = [
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatDividerModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MaterialModule { }