import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateTicketTypeComponent } from './pages/create-ticket-type/create-ticket-type.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketTypeDashboardComponent } from './pages/tickettypedashboard/tickettypedashboard.component';
import { DashboardTicketService } from './_services/dashboard-ticket-type/dashboardticket.service';
import { Ng2SmartTableModule,LocalDataSource  } from 'ng2-smart-table';
import { AppRoutingModule } from './app-routing.module';
import { SharedTicketTypeService } from './_services/sharedtickettype.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateTicketTypeComponent,
    TicketTypeDashboardComponent,

  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    HttpClientModule ,
    FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [DashboardTicketService,SharedTicketTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
