import { Component, OnInit } from '@angular/core';
import { HeaderModel } from '@models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dataMenu : HeaderModel[] = []
  constructor() { }

  ngOnInit(): void {
    this._onInit();
  }
  private _onInit() {
    this.dataMenu = [
      {
        title: 'Product List',
        icon: 'dashboard',
        routerLink: '',
      },
      {
        title: 'Cart',
        icon: 'shopping-cart',
        routerLink: 'cart',
 
      },

    ]
  }
}
