import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {TicketTypeDashboardComponent} from './pages/tickettypedashboard/tickettypedashboard.component'
import { CreateTicketTypeComponent} from './pages/create-ticket-type/create-ticket-type.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboardtickettype', pathMatch: 'full' },
  { path: 'createtickettype/:id', component: CreateTicketTypeComponent },
  { path: 'dashboardtickettype', component: TicketTypeDashboardComponent },
  

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
