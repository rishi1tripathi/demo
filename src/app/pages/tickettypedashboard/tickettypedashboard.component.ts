import { Component, OnInit } from '@angular/core';
import { DashboardTicketService } from '../../_services/dashboard-ticket-type/dashboardticket.service';
import { TicketType } from '../../_models/model-ticket-type';
import {SharedTicketTypeService} from '../../_services/sharedtickettype.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tickettypedashboard',
  templateUrl: './tickettypedashboard.component.html',
  styleUrls: ['./tickettypedashboard.component.scss']
})
export class TicketTypeDashboardComponent implements OnInit {
  
  private ticketType:TicketType;
  private ticketTypeList: TicketType[];

  constructor(private dashboardTicketService:DashboardTicketService,private sharedTicketTypeService: SharedTicketTypeService,private router: Router ) {} 

  ngOnInit() {
    this.getAllTicketTypes();

 

  }

  public getAllTicketTypes(){
    this.dashboardTicketService.getAllTicketTypes()
      .subscribe((data) => {
      this.ticketTypeList =data ;
      
    })
  }
 
  public callCreate(ticketType:TicketType,reachBy:number){
    if(reachBy==0)
     ticketType=new TicketType(0,"","","","Active");
  
    this.sharedTicketTypeService.setter(ticketType,reachBy);
  
  }

}
