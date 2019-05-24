import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-nk',
  templateUrl: './orders-item-nk.component.html',
  styleUrls: ['./orders-item-nk.component.css']
})
export class OrdersItemNKComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
