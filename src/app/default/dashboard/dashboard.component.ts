import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/customer.service';
import {Customers} from '../../custData/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  invoices: Customers[];
  topCustomers: {};
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient, private cs: CustomerService) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(topCustomer => {
      this.topCustomers = topCustomer ;
      console.log('topCustomers:', this.topCustomers);
    });


    this.getCustData();
    console.log('this.getCustData():', this.getCustData());

  }
  getCustData() {
    this.invoices = this.cs.getCust();
    console.log('this.invoices:', this.invoices);
  }

}
