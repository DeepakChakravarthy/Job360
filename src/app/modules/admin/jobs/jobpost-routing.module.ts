import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobpostComponent} from './jobpost.component'

const routes: Routes = [
    {
        path: '',
        component: JobpostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobpostRoutingModule {}
