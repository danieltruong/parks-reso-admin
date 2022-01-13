import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlessPaginationComponent } from './endless-pagination.component';

@NgModule({
  declarations: [EndlessPaginationComponent],
  imports: [CommonModule],
  exports: [EndlessPaginationComponent]
})
export class EndlessPaginationModule {}
