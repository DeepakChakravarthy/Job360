import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HloginComponent } from './hlogin/hlogin.component';

const routes: Routes = [
    {
        path:'',
        component: HloginComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class hloginRouterModule {}