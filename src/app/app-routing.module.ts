import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight/flight.component';
import { TouristComponent } from './tourist/tourist.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'flight', component: FlightComponent
  },
  {
    path: 'tourist', component: TouristComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
