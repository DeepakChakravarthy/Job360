import { Component, OnInit } from '@angular/core';
import {JobServicesService} from '../../../shared/services/jobs/job-services.service'

import {FormGroup,FormControl} from '@angular/forms'
import { logging } from 'protractor';

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
  appliedDate=new Date();

  jobapply:FormGroup=new FormGroup({
  jobId:new FormControl(localStorage.getItem('jobId')),
  seekerId:new FormControl(localStorage.getItem('seekerId')),
  appliedOn:new FormControl(this.appliedDate.toLocaleDateString("nl",{day:"2-digit",month:"2-digit", year:"numeric"}))
  })

  ngOnInit(): void {
    this.data()
    this.logg()
 
  }
 
logg(){
  this.dataService.userReterive().subscribe(data => {
    localStorage.setItem('seekerId',data['id'])
  })
  console.log(localStorage.getItem('seekerId'),"kjuhgyf",localStorage.getItem('jobId'))

}
  data(){
    this.dataService.jobDescripitionGetApi().subscribe(data =>{
      console.log(data)
      localStorage.setItem('jobId',data['id'])
      this.jobdescripitiondata=data;
    })
  }

  
apply(){
  
  console.log(this.jobapply.value)
  this.dataService.jobAppliedPostApi(this.jobapply.value).subscribe(data =>{
    //toaster
    console.log(data)
  })
}





}
