import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { SigninsignupServicesService } from '../../../shared/services/signinsignup-services.service';
import {FormGroup,FormControl} from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router'
import { TextBoxComponent } from "@progress/kendo-angular-inputs";


@Component({
  selector: 'app-hlogin',
  templateUrl: './hlogin.component.html',
  styleUrls: ['./hlogin.component.scss']
})
export class HloginComponent implements OnInit {

  constructor(private dataService:SigninsignupServicesService,private route: ActivatedRoute, private router: Router) { }
  xyz="sign-up-mode";
  mmm=false;
  userTypeValue:string='';
  Type:Array<string>=['company','seeker'];
  // notyf = new Notyf({
  //   duration: 1000,
  //   position: {
  //     x: 'right',
  //     y: 'top',
  //   },
  //   types: [
  //     {
  //       type: 'warning',
  //       background: 'orange',
  //               icon: {
  //         className: 'material-icons',
  //         tagName: 'i',
  //         text: 'warning'
  //       }
  //     },
  //     {
  //       type: 'error',
  //       background: 'indianred',
  //       duration: 2000,
  //       dismissible: true,

  //     }
  //   ]
  // });


  ngOnInit(): void {
  }
  
  SignInForm:FormGroup = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  SignUpForm:FormGroup = new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    type:new FormControl()
  })

  check1(){
    this.mmm=!this.mmm;
  }

  loginForm(){
    this.dataService.login(this.SignInForm.value).subscribe(data=>{
      this.userTypeValue=data['type']
      console.log(data)
      localStorage.setItem('userType',data['type'])
      localStorage.setItem('UserId',data['id'])
      localStorage.setItem('Token',data['token'])
      localStorage.setItem('EmailId',this.SignInForm['email'])

      if(this.userTypeValue=='company')
      {
        localStorage.setItem('Companylogedin', 'true');
        this.router.navigate(['company'])
      }
      else if(this.userTypeValue=='seeker')
      {
        
        this.router.navigate(['seeker'])
        localStorage.setItem('seekerlogedin', 'true');
        
   

        console.log("Logged IN as Seeker")
      }
    },
    error=>{
        // this.notyf.error('Check your Email/Password')
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
