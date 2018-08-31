import { Component, OnInit } from '@angular/core';
//import { DashboardTicketService } from '../../_services/dashboard-ticket-type/dashboardticket.service';
import { TicketType } from '../../_models/model-ticket-type';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-tickettypedashboard',
  templateUrl: './tickettypedashboard.component.html',
  styleUrls: ['./tickettypedashboard.component.scss']
})
export class TicketTypeDashboardComponent implements OnInit {
  source: LocalDataSource;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Ticket Type'
      },
      username: {
        title: 'Description'
      },
      email: {
        title: 'Workflow'
      }
    }
   };
   data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];


  private ticketTypeList: TicketType[];

  constructor() {this.source = new LocalDataSource(this.data); }

  ngOnInit() {
    //this.getAllTicketTypes();

 

  }

  // public getAllTicketTypes(){
  //   this.dashboardTicketService.getAllTicketTypes()
  //     .subscribe((data) => {
  //     this.ticketTypeList =data ;
  //     console.log(data);

  //   })
 

  // }

}
