import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tourists } from '../model/tourist.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {

    

  }

  firstClick() {
    console.log('clicked first button')
  }

}
