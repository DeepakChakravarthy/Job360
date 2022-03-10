import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../../../shared';
import { CommonModule } from '@angular/common';
import { JobpostComponent } from './jobpost.component';
import { JobpostRoutingModule } from './jobpost-routing.module';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AdminserviceService } from '../../../shared/services/adminservice.service';

@NgModule({
  declarations: [
    JobpostComponent
  ],
  imports: [
    JobpostRoutingModule,
    CommonModule,
    PageHeaderModule,
    NgbModule,
    ChartsModule,InputsModule,GridModule,PDFModule,ExcelModule]
})
export class JobsModule { }
