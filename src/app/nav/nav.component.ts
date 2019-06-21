import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "Application for managing space tourist flights by Paweł Gut";

  constructor() { }

  ngOnInit() {
  }

}
