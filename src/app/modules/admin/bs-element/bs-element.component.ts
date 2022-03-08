import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
//import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {SmartTableData} from './smart-table'
@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent  {
    
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    }
  };
  

  
 // source: LocalDataSource;
  
  constructor() {
  }

  // onSearch(query: string = '') {
  //   this.source.setFilter([
  //     // fields we want to include in the search
  //     {
  //       field: 'id',
  //       search: query
  //     },
  //     {
  //       field: 'name',
  //       search: query
  //     },
  //     {
  //       field: 'username',
  //       search: query
  //     },
  //     {
  //       field: 'email',
  //       search: query
  //     }
  //   ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  
}
