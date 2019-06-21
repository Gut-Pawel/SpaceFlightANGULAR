import { Timestamp } from 'rxjs';
import { element } from '@angular/core/src/render3';
import { DatePipe } from '@angular/common';
import { TmplAstBoundAttribute } from '@angular/compiler';

export class Flights {
    id: number;
    deparature: Date;
    arrival: Date;
    numberOfSeats: number;
    price: number;
}
