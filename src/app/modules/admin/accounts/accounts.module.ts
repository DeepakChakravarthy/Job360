import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './account-routing.module';

import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AdminserviceService } from '../../../shared/services/adminservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  declarations: [
    AccountsComponent
  ],
  providers: [
    AdminserviceService
  ],
  imports: [
    CommonModule,AccountsRoutingModule,PageHeaderModule, NgbModule,ChartsModule,InputsModule,GridModule,PDFModule,ExcelModule],
})
export class AccountsModule { }
