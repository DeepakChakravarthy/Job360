import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostPageComponent } from './job-post-page/job-post-page.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from "@progress/kendo-angular-intl";
import { CompanyHomepageComponent } from './company-homepage/company-homepage.component';
import { CompanyNavbarComponent } from './company-navbar/company-navbar.component';
import { RouterModule } from '@angular/router';
import { CompanyCorePageComponent } from './company-core-page/company-core-page.component';
import "hammerjs";
import { ChartModule, ChartsModule } from '@progress/kendo-angular-charts';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobServicesService } from '../../shared/services/jobs/job-services.service';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    JobPostPageComponent,
    CompanyHomepageComponent,
    CompanyNavbarComponent,
    CompanyCorePageComponent,
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    InputsModule,
    LabelModule,
    DateInputsModule,
    IntlModule,
    NgbModule,ChartsModule,InputsModule,GridModule,PDFModule,ExcelModule
   
  ],
  providers: [JobServicesService],
  exports: [CompanyCorePageComponent,JobPostPageComponent,CompanyHomepageComponent,CompanyNavbarComponent,CompanyProfileComponent]
})
export class CompanyModule { }
