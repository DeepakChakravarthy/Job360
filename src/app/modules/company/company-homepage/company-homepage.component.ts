import { Component, OnInit } from '@angular/core';
import { IntlService } from "@progress/kendo-angular-intl";
import { LegendLabelsContentArgs } from "@progress/kendo-angular-charts";



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

  constructor(private intl:IntlService) { 
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`}

  ngOnInit(): void {
  }

}
