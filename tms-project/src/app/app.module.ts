import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}    from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import {AuthenticationService} from './_services/authentication.service';
import {AlertService} from './_services/alert.service';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
  
    FooterComponent,
  
    LoginComponent,
  
    DashboardComponent,

  ],
  imports: [
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
