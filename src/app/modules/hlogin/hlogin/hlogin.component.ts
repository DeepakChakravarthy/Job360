import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { SigninsignupServicesService } from '../../../shared/services/signinsignup-services.service';
import {FormGroup,FormControl} from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router'


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
  Type:Array<string>=['company','seeker','admin']
  ngOnInit(): void {
  }
  
  SignInForm:FormGroup = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  check1(){
    console.log("mlkjnhg")
    this.mmm=!this.mmm;
  }

  loginForm(){
    this.dataService.login(this.SignInForm.value).subscribe(data=>{
      this.userTypeValue=data['type']
      localStorage.setItem('userType',data['type'])
      if(this.userTypeValue=='company')
      {
        this.router.navigate(['company'])
      }
    });

    //SignUp()
    
  }

}
