import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassListComponent } from './pass-list/pass-list.component';
import { PassTableRowComponent } from './pass-list/pass-table-row/pass-table-row.component';
import { PassesComponent } from './passes.component';
import { SharedModule } from 'app/shared/shared.module';
import { PassModule } from 'app/pass/pass.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EndlessPaginationModule } from 'app/shared/endless-pagination/endless-pagination.module';

@NgModule({
  declarations: [PassesComponent, PassListComponent, PassTableRowComponent],
  imports: [CommonModule, SharedModule, PassModule, FormsModule, EndlessPaginationModule, RouterModule.forRoot([])],
  exports: [PassListComponent],
  entryComponents: [PassTableRowComponent]
})
export class PassesModule {}
