import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
],
  exports: [MatButtonModule,MatInputModule, MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
],
})
export class MaterialModule { }