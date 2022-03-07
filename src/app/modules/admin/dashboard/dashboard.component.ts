import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ChartData, ChartType } from "chart.js";
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    saleData = [
        { name: "Google", value: 1050 },
        { name: "Dell", value: 1500 },
        { name: "HP", value: 1500 },
        { name: "Kovai.co", value: 5500 },
        { name: "Apple", value: 2000 }
      ];
    constructor() { }



    ngOnInit() {}
    

}
