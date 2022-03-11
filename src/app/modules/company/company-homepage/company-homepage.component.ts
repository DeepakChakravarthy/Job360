import { Component, OnInit, ViewChild } from '@angular/core';
import { IntlService } from "@progress/kendo-angular-intl";
import { LegendLabelsContentArgs } from "@progress/kendo-angular-charts";
import { DataBindingDirective} from "@progress/kendo-angular-grid";
import { AdminserviceService } from '../../../shared/services/adminservice.service';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-company-homepage',
  templateUrl: './company-homepage.component.html',
  styleUrls: ['./company-homepage.component.scss']
})
export class CompanyHomepageComponent implements OnInit {
style:string = 'normal';
public pieData: any[] = [
  { category: "0-14", value: 0.2545 },
  { category: "15-24", value: 0.1552 },
  { category: "25-54", value: 0.4059 },
  { category: "55-64", value: 0.0911 },
  { category: "65+", value: 0.0933 },
];
@ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
public gridData!: any[];
public gridView!: any[];

public mySelection: string[] = [];

dialogService: any;

userData:any[]=[];

  constructor(private intl:IntlService,private _service:AdminserviceService) { 
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`}

  ngOnInit(): void {
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

