import { Component, OnInit, Input } from '@angular/core';
import { Medicine } from '../medicine';
import {HomeComponent} from '../home/home.component';


@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {
  @Input() medicine: Medicine;
  selectedMed : Medicine;


  constructor() { }

  ngOnInit() {
  }
  goBack(): void {
    // this.location.back();
    console.log("back");
  }

 save(): void {
    // this.heroService.updateHero(this.hero)
    //   .subscribe(() => this.goBack());
    console.log("save");
  }
}
