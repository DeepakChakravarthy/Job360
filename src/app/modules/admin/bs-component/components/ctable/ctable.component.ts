import { Component, OnInit, ViewChild } from '@angular/core';

import { process } from '@progress/kendo-data-query';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { AdminserviceService } from '../../../../../shared/services/adminservice.service';

// import { adminServices } from 'src/app/shared/services/adminServices';


@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.scss']
})
export class CtableComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  public gridData!: any[];
  public gridView!: any[];

  public mySelection: string[] = [];

  dialogService: any;

  userData:any[]=[];

  constructor(private _service: AdminserviceService) {
    }

  public ngOnInit(): void {
    this._service.CompanygetData().subscribe((result) => {
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
            field: 'userId',
            operator: 'contains',
            value: input,
          },
          {
            field: 'id',
            operator: 'contains',
            value: input,
          },
          {
            field: 'companyName',
            operator: 'contains',
            value: input,
          },
          {
            field: 'address',
            operator: 'contains',
            value: input,
          },
          {
            field: 'contactNo',
            operator: 'contains',
            value: input,
          },
          {
            field: 'jobPosted',
            operator: 'contains',
            value: input,
          },
          {
            field: 'userAddress',
            operator: 'contains',
            value: input,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

}
