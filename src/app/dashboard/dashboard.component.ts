import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerId!:string|null
  customerName!:string|null
  constructor() { }

  ngOnInit(): void {
    this.customerId=sessionStorage.getItem('customerId')
    this.customerName=sessionStorage.getItem('customerName')
  }

}
