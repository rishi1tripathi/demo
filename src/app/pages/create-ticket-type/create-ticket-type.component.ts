import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
@Component({
  selector: 'app-create-ticket-type',
  templateUrl: './create-ticket-type.component.html',
  styleUrls: ['./create-ticket-type.component.scss']
})
export class CreateTicketTypeComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  constructor() { }

  

}
