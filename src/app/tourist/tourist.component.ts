import { Component, OnInit, enableProdMode } from '@angular/core';
import { Tourists } from '../model/tourist.model';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

enableProdMode();

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.scss']
})
export class TouristComponent implements OnInit {

  tourists: Tourists[];

// tslint:disable-next-line: no-shadowed-variable
  constructor(private data: DataService) { }

  listTourists: Tourists[];

  ngOnInit() {
    this.data.getTourist().subscribe(data => {
      this.tourists = data

    });
  }

}
