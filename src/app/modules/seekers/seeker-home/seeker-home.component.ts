import { Component, OnInit } from '@angular/core';
import {JobServicesService} from '../../../shared/services/jobs/job-services.service'
@Component({
  selector: 'app-seeker-home',
  templateUrl: './seeker-home.component.html',
  styleUrls: ['./seeker-home.component.scss']
})
export class SeekerHomeComponent implements OnInit {

  constructor(private dataService:JobServicesService) { }
  jobListData!:any;
  ngOnInit(): void {
    this.jobListGetApiTrigger();
  }

  jobListGetApiTrigger(){
    this.dataService.jobListGetApi().subscribe(data => {
      this.jobListData=data;
    })

    console.log(this.jobListData)
  }
}
