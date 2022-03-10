import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninsignupServicesService } from '../shared/services/signinsignup-services.service';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [CommonModule, HomePageRoutingModule,RouterModule],
    providers: [SigninsignupServicesService],
    declarations: [HomePageComponent]
})
export class HomePageModule {

}
