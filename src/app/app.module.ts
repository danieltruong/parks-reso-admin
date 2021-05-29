import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatMenuModule, MatTabsModule } from '@angular/material';

// modules
import { AppRoutingModule } from 'app/app-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';

// Modules
import { ParksModule } from './parks/parks.module';
import { MetricsModule } from './metrics/metrics.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from 'app/app.component';
import { HeaderComponent } from 'app/header/header.component';
import { FooterComponent } from 'app/footer/footer.component';
import { ToggleButtonComponent } from 'app/toggle-button/toggle-button.component';
import { HomeComponent } from 'app/home/home.component';
import { SidebarComponent } from 'app/sidebar/sidebar.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ParkModule } from './park/park.module';
import { FacilityModule } from './facility/facility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ToggleButtonComponent,
    ConfirmComponent,
    ReservationsComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    AppRoutingModule, // <-- module import order matters - https://angular.io/guide/router#module-import-order-matters
    NgbModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    NgSelectModule,
    MatMenuModule,
    MatTabsModule,
    MetricsModule,
    SharedModule,

    ParksModule,
    ParkModule,
    FacilitiesModule,
    FacilityModule
  ],
  providers: [
    CookieService,
  ],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    Object.defineProperty(applicationRef, '_rootComponents', { get: () => applicationRef['components'] });
  }
}
