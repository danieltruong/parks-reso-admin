import {
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../../utils/utils';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FiscalYearLockService } from 'src/app/services/fiscal-year-lock.service';
import { Constants } from '../../utils/constants';
import { summarySection } from './summary-section/summary-section.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnDestroy {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() id: string = '';
  @Input() secondaryText: string = '';
  @Input() notes: string = '';
  @Input() summaries: Array<summarySection> = [];
  @Input() editLink: string = '';
  @Input() recordLock;

  private subscriptions = new Subscription();
  private formParams;
  private utils = new Utils();
  public isLocked;
  public isFiscalYearLocked = true;
  public readonly iconSize = 50; // icon size in px

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fiscalYearLockService: FiscalYearLockService,
    protected dataService: DataService
  ) {
    this.subscriptions.add(
      dataService
        .getItemValue(Constants.dataIds.ENTER_DATA_URL_PARAMS)
        .subscribe((res) => {
          if (res) {
            this.formParams = res;
            this.setFiscalLockVar();
          }
        })
    );
  }

  async setFiscalLockVar() {
    if (this.formParams?.date) {
      // extract year from form params
      const year = this.utils.getFiscalYearFromYYYYMM(this.formParams.date);
      const fiscalLock = await this.fiscalYearLockService.fetchFiscalYear(year);
      this.isFiscalYearLocked = fiscalLock.isLocked ?? false; 
    }
  }

  lockCheck(){
    if (this.isFiscalYearLocked || this.recordLock === true) {
      return true;
    }
    return false;
  }

  edit() {
    this.router.navigate([this.editLink], {
      relativeTo: this.activatedRoute,
      queryParams: this.formParams,
    });
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
