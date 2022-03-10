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
import { ChartModule } from '@progress/kendo-angular-charts';


@NgModule({
  declarations: [
    JobPostPageComponent,
    CompanyHomepageComponent,
    CompanyNavbarComponent,
    CompanyCorePageComponent
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
    IntlModule
   
  ],
  exports: [CompanyCorePageComponent,JobPostPageComponent,CompanyHomepageComponent,CompanyNavbarComponent]
})
export class CompanyModule { }
