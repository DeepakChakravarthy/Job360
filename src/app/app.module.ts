import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './modules/company/company.module';
import {HloginModule} from './modules/hlogin/hlogin.module';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SeekersModule } from './modules/seekers/seekers.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SigninsignupServicesService } from './shared/services/signinsignup-services.service';






@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        CompanyModule,
        InputsModule,
        LabelModule,
        DateInputsModule,
        ChartsModule,
        DropDownsModule,
        HloginModule,
        SeekersModule,
        LayoutModule,
        
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,SigninsignupServicesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
