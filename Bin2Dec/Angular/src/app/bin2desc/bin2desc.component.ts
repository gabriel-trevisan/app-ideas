import { Component, OnInit } from '@angular/core';
import { ConvertToBinaryService } from './convert-to-binary.service';

@Component({
  selector: 'app-bin2desc',
  templateUrl: './bin2desc.component.html',
  styleUrls: ['./bin2desc.component.css']
})
export class Bin2descComponent implements OnInit {

  binaryNumber: string = "";
  decimalNumber: number|null = null;
  message: string = "";

  constructor(private convertToBinaryService: ConvertToBinaryService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    try {
      this.decimalNumber = this.convertToBinaryService.convertToDecimal(this.binaryNumber);
      this.message = "";
    } catch (error) {
      this.message = error;
    }
  }

}
