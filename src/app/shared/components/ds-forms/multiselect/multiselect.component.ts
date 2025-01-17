import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input.component';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  // Note: ViewEncapsulation necessary to override ng-select css classes.
  encapsulation: ViewEncapsulation.None,
})
export class MultiselectComponent
  extends BaseInputComponent
  implements OnInit, OnChanges
{
  @Input() multiSelectOptions;

  public selectedOptions: any[] = [];
  public isDisabled;

  ngOnInit(): void {
    if (!this.control.value) {
      this.control.setValue(this.selectedOptions);
    }
  }

  checkDisabled() {
    return this.control.disabled || false;
  }

  updateMultiselect() {
    this.control.setValue(this.selectedOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control']) {
      this.selectedOptions = changes['control'].currentValue.value;
    }
  }
}
