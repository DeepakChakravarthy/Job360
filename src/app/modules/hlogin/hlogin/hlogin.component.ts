import { Component, OnInit } from '@angular/core';

import { SigninsignupServicesService } from '../../../shared/services/signinsignup-services.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router'
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-hlogin',
  templateUrl: './hlogin.component.html',
  styleUrls: ['./hlogin.component.scss']
})
export class HloginComponent implements OnInit {
  FailedSignup: string;

  constructor(private dataService:SigninsignupServicesService,private route: ActivatedRoute, private router: Router,private toastr: ToastrService) { }
  xyz="sign-up-mode";
  mmm=false;
  userTypeValue:string='';
  Type:Array<string>=['company','seeker'];
 LoaderValue=this.dataService.loader
  ngOnInit(): void {
  }
  public loaders = [
    {
      type: "infinite-spinner",
      themeColor: "info",
      size: "large",
    },
  ];

  
  SignInForm:FormGroup = new FormGroup({
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required)
  })

  SignUpForm:FormGroup = new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required),
    type:new FormControl('',Validators.required)
  })

  check1(){
    this.mmm=!this.mmm;
  }

  loginForm(){
    this.LoaderValue=true
    this.dataService.login(this.SignInForm.value).subscribe(data=>{
      this.userTypeValue=data['type']
      console.log(data)
      localStorage.setItem('userType',data['type'])
      localStorage.setItem('UserId',data['id'])
      localStorage.setItem('Token',data['token'])
      localStorage.setItem('EmailId',this.SignInForm['email'])

      if(this.userTypeValue=='company')
      {
        this.LoaderValue=false
        this.toastr.success('Welcome to Job360', 'Login Success');
        localStorage.setItem('Companylogedin', 'true');
        this.router.navigate(['company'])
      }
      else if(this.userTypeValue=='seeker')
      {
        this.toastr.success('Welcome to Job360', 'Login Success');
        this.LoaderValue=false
        this.router.navigate(['seeker'])
        localStorage.setItem('seekerlogedin', 'true');
        
   
       

        console.log("Logged IN as Seeker")
      }
      else{
        this.LoaderValue=false
      }
    },
    error=>{
      this.LoaderValue=false
        // this.notyf.error('Check your Email/Password')
      this.toastr.error(error.error.message, 'Invalid Credientials');
      console.log(error.error.message)
      this.FailedSignup  = error.error.message
      if(this.FailedSignup==='Validation Failed'){
        this.toastr.error('Please Enter the Valid Details', 'Sign-in Failed');
      }
    });

   
    
  }

  signup(){
    this.dataService.signupServices(this.SignUpForm.value).subscribe(
      data => {
        console.log(data)
      if(data['type']==='seeker'){
        localStorage.setItem('userType',data['type'])
        localStorage.setItem('UserId',data['id'])
        localStorage.setItem('EmailId',data['email'])
        localStorage.setItem('seekerlogedin', 'true')
        this.router.navigate(['seeker/Details'])
      }
      else if(data['type'] == 'company'){
        localStorage.setItem('userType',data['type'])
        localStorage.setItem('UserId',data['id'])
        localStorage.setItem('EmailId',data['email'])
        localStorage.setItem('Companylogedin', 'true')
        this.router.navigate(['company'])
      }
      }, error => {
        alert(error);
        
      }
    )
  }

  
  


}
