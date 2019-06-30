import { Component, OnInit } from '@angular/core';
import { Flights } from '../model/flight.model';
import { DataService } from '../data.service';
import { ListOfTouristToFlight } from '../model/listOfTouristToFlight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  flights: Flights[];
  flightsId: any;
  status: boolean;
  listOfTouristToFlight: ListOfTouristToFlight[];

  constructor(private data: DataService) { }


  ngOnInit() {

    this.data.getFlights().subscribe(
      data => {
        this.flights = data;
        this.flightsId = this.flights.map(el => {
          return el.id;
        });
        console.log(this.flightsId);
      }
    );
    
  }
  getData(id: number){
    this.data.getListOfTouristToFlight(id).subscribe(
      data => {
        this.listOfTouristToFlight = data;
        this.status = true;
      }
    );
  }

  closeModal(){
    this.status = false;
  }
  
}
