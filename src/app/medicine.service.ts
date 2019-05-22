import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import {MEDICINE}  from  './mock-medicine';
import { MessageService } from './message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {


  constructor(private messageService: MessageService) { }

  getMedicine(): Observable<Medicine[]> {
    this.messageService.add('medicineService: selected Medicines');
    return of(MEDICINE);

  }
}
