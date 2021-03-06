import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCorePageComponent } from './modules/company/company-core-page/company-core-page.component';
import { CompanyHomepageComponent } from './modules/company/company-homepage/company-homepage.component';
import { CompanyProfileComponent } from './modules/company/company-profile/company-profile.component';
import { JobPostPageComponent } from './modules/company/job-post-page/job-post-page.component';
import { JobDescripitionComponent } from './modules/seekers/job-descripition/job-descripition.component';
import { SeekerCorePageComponent } from './modules/seekers/seeker-core-page/seeker-core-page.component';
import { SeekerHomeComponent } from './modules/seekers/seeker-home/seeker-home.component';
import { SeekerProfileViewComponent } from './modules/seekers/seeker-profile-view/seeker-profile-view.component';
import { SeekerProfileComponent } from './modules/seekers/seeker-profile/seeker-profile.component';
import { AuthGuard } from './shared';
import { CompanyGuard } from './shared/guard/company.guard';
import { SeekerGuard } from './shared/guard/seeker.guard';


const routes: Routes = [
    {
        path:'login',
        loadChildren: () => import('./modules/hlogin/hlogin.module').then((m)=> m.HloginModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },
    { path: 'admin/login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },
    {
        path: '',
        loadChildren: () => import('./homepage/home-page.module').then((m) => m.HomePageModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    { 
        path:'company',
        component:CompanyCorePageComponent,
        children:[{
            path:'',
            component:CompanyHomepageComponent
        },
        { path:'profile', component:CompanyProfileComponent
        },
        {
            path:'jobPost',
            component:JobPostPageComponent
        }],canActivate: [CompanyGuard]
    },{
        path:'seeker',
        component:SeekerCorePageComponent,
        children:[{
            path:'',
            component:SeekerHomeComponent
        },{
            path:'Details',
            component:SeekerProfileComponent
        },
        {
            path:'Profile',
            component:SeekerProfileViewComponent
        },{

        
        path:'JobDescripition',
        component:JobDescripitionComponent}
        
    ],canActivate: [SeekerGuard]
    },

    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
