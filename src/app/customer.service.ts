import { Injectable } from '@angular/core';
import {Customers} from './custData/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }
  getCust(): Customers[] {
    return [
      {
        "name": "John Doe",
        "amount": "25000",
        "status": "paid"
      },
      {
        "name": "Ramesh Nath",
        "amount": "5000",
        "status": "pending"
      },
      {
        "name": "Amar Kundan",
        "amount": "7600",
        "status": "failed"
      },
      {
        "name": "Ritika Bhadra",
        "amount": "22000",
        "status": "paid"
      }
    ]
  }
}
