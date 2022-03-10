import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { ProfileServicesService } from '../../../shared/services/profile/profile-services.service';

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.scss']
})
export class SeekerProfileComponent implements OnInit {

  constructor(private dataService:ProfileServicesService) { }

  ngOnInit(): void {
  }
  public currentStep = 0;

  value=new Date();

  private sumbitted = false;

  // private isStepValid = (index: number): boolean => {
  //     return this.getGroupAt(index).valid;
  // };

  // private shouldValidate = (): boolean => {
  //     return this.sumbitted === true;
  // };

steps = [
  {
      label: 'Account Details',
      //isValid: 1,
     
  },
  {
      label: 'Personal Details',
      //isValid: this.isStepValid,
      
  },
  {
      label: 'Payment Details',
      //isValid: this.isStepValid,
  }
      
];

PersonalDetails:FormGroup=new FormGroup({
firstName:new FormControl(''),
lastName:new FormControl(''),
contactNo:new FormControl(''),
userId:new FormControl(localStorage.getItem('UserId')),
jobApplied:new FormControl(0)
})

EducationDetails:FormGroup = new FormGroup({
startingDate:new FormControl(''),
completionDate:new FormControl('',Validators.required),
percentage:new FormControl('',Validators.required),
instituteName:new FormControl('',Validators.required),
degereName:new FormControl('',Validators.required),
SeekerId:new FormControl('',Validators.required)
})

ExperienceDetails:FormGroup = new FormGroup({
jobTitle:new FormControl(),
companyName:new FormControl(),
startDate:new FormControl(),
endingDate:new FormControl(),
isCurrent:new FormControl(),
descripition:new FormControl(),
seekerId:new FormControl()
})


personalDetailApiTrigger(){
  this.dataService.personalDetailsApi(this.PersonalDetails.value)
    .subscribe(data=>{
      alert(data)
  })
}

nextBtn(){
  if(this.currentStep==0){
    this.personalDetailApiTrigger()
  }
this.currentStep=this.currentStep+1;

}


}
