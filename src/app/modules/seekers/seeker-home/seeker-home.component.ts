import { Component, OnInit } from '@angular/core';
import {JobServicesService} from '../../../shared/services/jobs/job-services.service'
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-seeker-home',
  templateUrl: './seeker-home.component.html',
  styleUrls: ['./seeker-home.component.scss']
})
export class SeekerHomeComponent implements OnInit {

  constructor(private dataService:JobServicesService,private router:Router,private route: ActivatedRoute) { }
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

  jobdesc(id){
    this.dataService.jobId=id;
    this.router.navigate(['JobDescripition'],{relativeTo:this.route})
  }
}
