import { Component, Input, OnInit } from '@angular/core';
import { OrderModel } from '@models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() orderData:OrderModel;

  constructor() { }

  ngOnInit(): void {
  }

}
