import { Component, OnInit, ViewChild } from '@angular/core';
import{ProfileServicesService} from '../../../shared/services/profile/profile-services.service'


@Component({
  selector: 'app-seeker-profile-view',
  templateUrl: './seeker-profile-view.component.html',
  styleUrls: ['./seeker-profile-view.component.scss']
})
export class SeekerProfileViewComponent implements OnInit {
    constructor(private dataService:ProfileServicesService) { }

  ngOnInit(): void {
    this.data()
  }

  username:string=localStorage.getItem('name')

  data(){
    this.dataService.userProfile().subscribe(data => {
      localStorage.setItem('name',data['username'])
    },error=>{console.log(error)})
  }

}
