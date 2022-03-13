import { Component, OnInit,ViewChild} from '@angular/core';
import { routerTransition } from '../../../router.animations';


import { process } from '@progress/kendo-data-query';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { AdminserviceService } from '../../../../app/shared/services/adminservice.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.scss'],
  animations: [routerTransition()]
})
export class JobpostComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  public gridData!: any[];
  public gridView!: any[];

  public mySelection: string[] = [];

  dialogService: any;

  userData:any[]=[];

  constructor(private _service: AdminserviceService) {
    }

  public ngOnInit(): void {
    this._service.JobsGetData().subscribe((result) => {
      if (result != null) {
        console.log(result);
        this.gridView = result;
        this.gridData = result;
      }
    });
  }

  public onFilter(inputValue: any): void {
    const jobstatus = inputValue.target.value;
    const input = inputValue.target.value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'companyId',
            operator: 'contains',
            value: input,
          },
          {
            field: 'createdAt',
            operator: 'contains',
            value: input,
          },
          {
            field: 'title',
            operator: 'contains',
            value: input,
          },
          {
            field: 'type',
            operator: 'contains',
            value: input,
          },
          {
            field: 'location',
            operator: 'contains',
            value: input,
          },

          {
            field: 'noOfVacancy',
            operator: 'contains',
            value: input,
          },
          {
            field: 'salary',
            operator: 'contains',
            value: input,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

}
