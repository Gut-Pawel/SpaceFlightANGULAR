import { Timestamp } from 'rxjs';
import { element } from '@angular/core/src/render3';
import { DatePipe, Time } from '@angular/common';
import { TmplAstBoundAttribute } from '@angular/compiler';

export class Flights {
    id: number;
    deparatureDate: Date;
    deparatureTime: Time;
    arrivatDate: Date;
    arrivalTime: Time;
    numberOfSeats: number;
    price: number;
}
