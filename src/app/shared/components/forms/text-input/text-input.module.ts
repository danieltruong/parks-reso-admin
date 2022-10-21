import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
