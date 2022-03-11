import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';


import { process } from '@progress/kendo-data-query';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { AdminserviceService } from '../../../../app/shared/services/adminservice.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [routerTransition()]
})
export class AccountsComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  public gridData!: any[];
  public gridView!: any[];

  public mySelection: string[] = [];

  dialogService: any;

  userData:any[]=[];

  constructor(private _service: AdminserviceService) {
    }

  public ngOnInit(): void {
    this._service.AccountsGetData().subscribe((result) => {
      if (result != null) {
        console.log(result);
        this.gridView = result;
        this.gridData = result;
      }
    });
  }

  public onFilter(inputValue: any): void {
    const input = inputValue.target.value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'username',
            operator: 'contains',
            value: input,
          },
          {
            field: 'id',
            operator: 'contains',
            value: input,
          },
          {
            field: 'email',
            operator: 'contains',
            value: input,
          },
          {
            field: 'type',
            operator: 'contains',
            value: input,
          },
          {
            field: 'password',
            operator: 'contains',
            value: input,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

}
