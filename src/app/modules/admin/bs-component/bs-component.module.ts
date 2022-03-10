import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../../shared';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import { CtableComponent } from './components/ctable/ctable.component';

import {
    GridModule,
    PDFModule,
    ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AdminserviceService } from '../../../shared/services/adminservice.service';


@NgModule({
    imports: [CommonModule, BsComponentRoutingModule, FormsModule, ReactiveFormsModule, NgbModule, PageHeaderModule,ChartsModule,InputsModule,GridModule,PDFModule,ExcelModule],
    declarations: [
        BsComponentComponent,
        CtableComponent,
    ],
    providers: [
        AdminserviceService
      ]
})
export class BsComponentModule { }
