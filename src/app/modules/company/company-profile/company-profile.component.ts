import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  companyProfileForm:FormGroup = new FormGroup({
    
    companyName:new FormControl(),
    userId: new FormControl(localStorage.getItem('UserId')),
    address: new FormControl(),
    contactNo: new FormControl(),
    jobPosted: new FormControl(0)
  })
}
