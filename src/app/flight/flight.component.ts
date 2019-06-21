import { Component, OnInit } from '@angular/core';
import { Flights } from '../model/flight.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  flights: Flights[];

  constructor(private data: DataService) { }


  ngOnInit() {
    this.data.getFlights().subscribe(
      data => {
        this.flights = data;
      }
    );
  }

}
