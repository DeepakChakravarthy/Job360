import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HloginComponent } from './hlogin/hlogin.component';
import {hloginRouterModule} from './hlogin-routing.module'
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [
    HloginComponent
  ],
  imports: [
    CommonModule,
    hloginRouterModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    DropDownListModule
  ],
 exports: [
   HloginComponent
 ]
})
export class HloginModule { }
