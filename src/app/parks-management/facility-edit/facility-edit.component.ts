import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FacilityService } from 'src/app/services/facility.service';
import { ModifierService } from 'src/app/services/modifier.service';
import { ParkService } from 'src/app/services/park.service';
import { Constants } from 'src/app/shared/utils/constants';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.scss'],
})
export class FacilityEditComponent implements OnDestroy {
  private subscriptions = new Subscription();
  public facility;
  public park;

  private utils = new Utils();

  constructor(
    protected dataService: DataService,
    protected modifierService: ModifierService,
    protected facilityService: FacilityService,
    protected parkService: ParkService
  ) {
    this.subscriptions.add(
      dataService
        .watchItem(Constants.dataIds.CURRENT_FACILITY_KEY)
        .subscribe((res) => {
          if (res) {
            this.facility = this.facilityService.getCachedFacility(res);
            this.updateModifiers();
          }
        })
    );
    this.subscriptions.add(
      dataService.watchItem(Constants.dataIds.CURRENT_PARK_KEY).subscribe((res) => {
        if (res) {
          this.park = this.parkService.getCachedPark(res);
        }
      })
    );
  }

  updateModifiers() {
    if (this.park && this.facility) {
      const today = this.utils.getTodaysDate();
      this.modifierService.fetchData(this.park.sk, this.facility.sk, today);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
