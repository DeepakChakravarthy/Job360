import { Component, OnInit } from '@angular/core';
import {JobServicesService} from '../../../shared/services/jobs/job-services.service'
@Component({
  selector: 'app-job-descripition',
  templateUrl: './job-descripition.component.html',
  styleUrls: ['./job-descripition.component.scss']
})
export class JobDescripitionComponent implements OnInit {

  constructor(private dataService:JobServicesService) { }
  jobCategory:string="DotNet Developer";
  jobSalary:string='Disclosed';
  jobdescripitiondata!:any;
  isActiveData!:string;

  

  ngOnInit(): void {
    this.data()
  }
 

  data(){
    this.dataService.jobDescripitionGetApi().subscribe(data =>{
      console.log(data)
      this.jobdescripitiondata=data;
    })
  }







}
