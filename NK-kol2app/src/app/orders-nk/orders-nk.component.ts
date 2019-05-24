import { Component, OnInit } from '@angular/core';
import {NKDataService} from "../nk-data.service";

@Component({
  selector: 'app-orders-nk',
  templateUrl: './orders-nk.component.html',
  styleUrls: ['./orders-nk.component.css']
})
export class OrdersNKComponent implements OnInit {

  items;
  constructor(private dataService: NKDataService) { }

  ngOnInit() {
    this.items = this.dataService.getAll().subscribe(
      response => {
        this.items = response;
      });
  }


}
