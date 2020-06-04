import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
