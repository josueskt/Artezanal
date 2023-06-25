import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Factura',
  templateUrl: './Factura.component.html',
  styleUrls: ['./Factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printInvoice() {
    window.print();
  }

}
