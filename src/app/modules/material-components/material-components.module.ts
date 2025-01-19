import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialComponentsModule {}
