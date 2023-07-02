import { Component, OnInit } from '@angular/core';
import { QrService } from '../qr.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

  export class QrComponent implements OnInit {
    qrImageUrl: string;

    constructor(private qrService: QrService) { }

    ngOnInit() {
      this.getQrImage();
    }

    getQrImage() {
      this.qrService.getQrImage().subscribe(
        (response) => {
          this.qrImageUrl = response.qrImage;
        },
        (error) => {
          console.log(error);
        }
      );
    }

}
