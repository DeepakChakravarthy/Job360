import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavComponent } from './shared/homenav/homenav.component';
import { RegisterComponent } from './shared/Auth/register/register.component';
import { LoginComponent } from './shared/Auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomenavComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
