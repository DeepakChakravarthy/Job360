import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {JobServicesService} from '../../../shared/services/jobs/job-services.service';

@Component({
  selector: 'app-job-post-page',
  templateUrl: './job-post-page.component.html',
  styleUrls: ['./job-post-page.component.scss']
})
export class JobPostPageComponent implements OnInit {

  constructor(private dataService: JobServicesService) { }
  values:Date=new Date();
  ngOnInit(): void {
  }

  jobPostForm:FormGroup=new FormGroup({
    companyId:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    type:new FormControl(this.values.toLocaleDateString("nl",{day:"2-digit",month:"2-digit", year:"numeric"})),
    createdAt:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required]),
    noOfVacancy:new FormControl('',[Validators.required]),
    isActive:new FormControl('',[Validators.required])
  })

  submit(){
    this.dataService.createJobPostApi(this.jobPostForm.value).subscribe(data =>{
      console.log(data)
      
  })
  }

}
