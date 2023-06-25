import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-history-reservas',
  templateUrl: './history-reservas.component.html',
  styleUrls: ['./history-reservas.component.css']
})
export class HistoryReservasComponent implements OnInit {
  reservations: FormGroup[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.reservations.push(this.createReservationForm());
    }
  }

  createReservationForm(): FormGroup {
    return this.fb.group({
      departureDate: [''],
      driverName: [''],
      routeNumber: [''],
      busNumber: [''],
      passenger: ['']
    });
  }
}
