import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerHomeComponent } from './seeker-home/seeker-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';



@NgModule({
  declarations: [
    SeekerHomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    LabelModule
  ],
  exports: [SeekerHomeComponent]
})
export class SeekersModule { }
