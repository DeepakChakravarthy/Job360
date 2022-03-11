import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileServicesService } from '../../../shared/services/profile/profile-services.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  constructor(private router: Router, private dataService:ProfileServicesService) { }

  ngOnInit(): void {
  }

  companyProfileForm:FormGroup = new FormGroup({
    
    companyName:new FormControl(),
    userId: new FormControl(localStorage.getItem('UserId')),
    address: new FormControl(),
    contactNo: new FormControl(),
    jobPosted: new FormControl(0)
  })


  companyProfileApiTrigger(){
    this.dataService.CompanyProfileApi(this.companyProfileForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['company'])
    })
  }
}
