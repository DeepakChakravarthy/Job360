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
  public resumepdf:string='https://job360store.blob.core.windows.net/file-container/Scaffoldcommands.pdf'

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
completionDate:new FormControl(''),
percentage:new FormControl(''),
instituteName:new FormControl(''),
degereName:new FormControl(''),
SeekerId:new FormControl(localStorage.getItem('UserId'))
})

ExperienceDetails:FormGroup = new FormGroup({
jobTitle:new FormControl(),
companyName:new FormControl(),
startDate:new FormControl(),
endingDate:new FormControl(),
isCurrent:new FormControl(),
descripition:new FormControl(),
seekerId:new FormControl(localStorage.getItem('UserId'))
})


personalDetailApiTrigger(){
  this.dataService.personalDetailsApi(this.PersonalDetails.value)
    .subscribe(data=>{
      alert(data)
  })
}

EducationDetailsApiTrigger(){
  console.log(this.EducationDetails.value)
  this.dataService.EducationDetailsApi(this.EducationDetails.value).subscribe(data=>{
    console.log(data);
  })
}

nextBtn(){
  if(this.currentStep==0){
    this.personalDetailApiTrigger()
  }
  else if(this.currentStep===1){
    this.EducationDetailsApiTrigger()
  }
  else if(this.currentStep===2){

  }
  this.currentStep=this.currentStep+1;

}

pdf(){
//   let file = new Blob([data], { type: 'application/pdf' })
//           var fileURL = URL.createObjectURL(file);
// // if you want to open PDF in new tab
//           window.open(fileURL); 
//           var a         = document.createElement('a');
//           a.href        = fileURL; 
//           a.target      = '_blank';
//           a.download    = 'bill.pdf';
//           document.body.appendChild(a);
//           a.click();
}


}
