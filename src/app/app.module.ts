import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateTicketTypeComponent } from './pages/create-ticket-type/create-ticket-type.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketTypeDashboardComponent } from './pages/tickettypedashboard/tickettypedashboard.component';
//import { DashboardTicketService } from './_services/dashboard-ticket-type/dashboardticket.service';
import { Ng2SmartTableModule,LocalDataSource  } from 'ng2-smart-table';
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
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
