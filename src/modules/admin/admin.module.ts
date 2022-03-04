import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreComponent } from './core/core.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CoreComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports : [
    NavbarComponent,
    CoreComponent
  ]
})
export class AdminModule { }
