import { Component, OnInit, ViewChild } from '@angular/core';
import{ProfileServicesService} from '../../../shared/services/profile/profile-services.service'


@Component({
  selector: 'app-seeker-profile-view',
  templateUrl: './seeker-profile-view.component.html',
  styleUrls: ['./seeker-profile-view.component.scss']
})
export class SeekerProfileViewComponent implements OnInit {
    constructor(private dataService:ProfileServicesService) { }

    username:string=localStorage.getItem('name')
    Contact_Number:string = localStorage.getItem('Mobile')
    JobsApplied:Number = Number (localStorage.getItem('jobApplied'))
    
    EmailID:string =  localStorage.getItem('EmailID')

    Address1='Thudiyalur,Coimbatore,TamilNadu,India';
    Address2='50 SHB Bay Area, San Francisco, CA';
    Address3='Cambridge, London, UK';
    Address4='KarumathamPatti,Coimbatore,TamilNadu,India';

    Address=[this.Address1,this.Address2,this.Address3,this.Address4]

    Complete_Address = this.Address[Math.floor(Math.random() * this.Address.length)];

    
    
  ngOnInit(): void {
    this.data()
    console.log(this.EmailID)
    console.log(this.username)
    console.log(this.Complete_Address)
  }



  data(){
    this.dataService.userReterive().subscribe(data => {
      localStorage.setItem('name',data['firstName'])
      localStorage.setItem('Mobile',data['contactNo'])
      localStorage.setItem('JobsApplied',data['jobApplied'])
    },error=>{console.log(error)})
  }

}
