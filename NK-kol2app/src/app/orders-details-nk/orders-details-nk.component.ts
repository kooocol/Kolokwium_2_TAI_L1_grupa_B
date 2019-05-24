import { Component, OnInit } from '@angular/core';
import {NKDataService} from "../nk-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-nk',
  templateUrl: './orders-details-nk.component.html',
  styleUrls: ['./orders-details-nk.component.css']
})
export class OrdersDetailsNKComponent implements OnInit {

  item;

  constructor(private dataService: NKDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    this.item = this.dataService.getItem(id).subscribe(response => this.item = response);
  }
}
