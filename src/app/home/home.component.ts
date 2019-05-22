import { Component, OnInit } from '@angular/core';
import {Medicine} from '../medicine';
import { MEDICINE } from '../mock-medicine';
import {MedicineService} from '../medicine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 selectedMed : Medicine ;
 medicine: Medicine[] ;

  constructor(private medicineService : MedicineService) { }

  ngOnInit() {
    this.getMedicine();
  }

 add(med) : void {
   console.log(med);
 }

onSelect(med: Medicine): void {
  this.selectedMed = med;
  console.log(med);
}
getMedicine( ): void {
  this.medicineService.getMedicine()
      .subscribe(medicine => this.medicine = medicine);
}
}
