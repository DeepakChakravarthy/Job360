import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerHomeComponent } from './seeker-home/seeker-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { SeekerProfileComponent } from './seeker-profile/seeker-profile.component';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SeekerCorePageComponent } from './seeker-core-page/seeker-core-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileServicesService } from '../../shared/services/profile/profile-services.service';
import { JobServicesService } from '../../shared/services/jobs/job-services.service';
import { SeekerProfileViewComponent } from './seeker-profile-view/seeker-profile-view.component';
import { JobDescripitionComponent } from './job-descripition/job-descripition.component';


@NgModule({
  declarations: [
    SeekerHomeComponent,
    NavbarComponent,

    SeekerProfileComponent,
    SeekerCorePageComponent,
    SeekerProfileViewComponent,
    JobDescripitionComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    LabelModule,
    DateInputsModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ProfileServicesService,    JobServicesService  ]
  ,
  exports: [SeekerHomeComponent,SeekerProfileComponent]
})
export class SeekersModule { }
