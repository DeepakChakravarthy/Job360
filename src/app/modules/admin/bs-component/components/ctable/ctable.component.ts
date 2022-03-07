import { Component, OnInit } from '@angular/core';
import { LocalDataSource  } from 'ng2-smart-table';
import {SmartTableData} from './../../../bs-element/smart-table'
@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.scss']
})
export class CtableComponent implements OnInit {
  CompanyRegistrationList:any=[];
  

  constructor() {
  }
  ngOnInit(): void {
    
  }

}
