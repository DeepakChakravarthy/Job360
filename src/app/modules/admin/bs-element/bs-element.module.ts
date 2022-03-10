import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../../../shared';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';


import {
    GridModule,
    PDFModule,
    ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AdminserviceService } from '../../../shared/services/adminservice.service';

@NgModule({
    imports: [CommonModule, BsElementRoutingModule, PageHeaderModule, NgbModule,ChartsModule,InputsModule,GridModule,PDFModule,ExcelModule],
    declarations: [BsElementComponent],
    providers: [
        AdminserviceService
      ]
})
export class BsElementModule {}
