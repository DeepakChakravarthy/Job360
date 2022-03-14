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
  LoaderValue=this.dataService.loader
  //appliedDate=new Date();
  jobIdData:Number=Number(localStorage.getItem('jobId'))

  jobapply:FormGroup=new FormGroup({
  jobId:new FormControl(this.jobIdData),
  seekerId:new FormControl(Number(localStorage.getItem('seekerId'))),
  //appliedOn:new FormControl(this.appliedDate.toLocaleDateString("nl",{day:"2-digit",month:"2-digit", year:"numeric"}))
  })

  public loaders = [
    {
      type: "infinite-spinner",
      themeColor: "info",
      size: "large",
    },
  ];

  ngOnInit(): void {
    this.data()
   
 
  }
 

  data(){
    this.LoaderValue=true
    this.dataService.jobDescripitionGetApi().subscribe(data =>{
      console.log(data)
      localStorage.setItem('jobId',data['id'])
      
      this.jobdescripitiondata=data;

      this.LoaderValue=false;
    })
    this.dataService.userReterive().subscribe(data => {
      console.log(data)
      localStorage.setItem('seekerId',data['id'])
    })
  }

  
apply(){
  
  console.log(this.jobapply.value)
  this.dataService.jobAppliedPostApi(this.jobapply.value).subscribe(data =>{
    //toaster 
    console.log(data)
    //Navigating to seeker Home Page
    
  })
}





}
