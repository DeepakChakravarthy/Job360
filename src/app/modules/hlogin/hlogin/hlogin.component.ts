import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-hlogin',
  templateUrl: './hlogin.component.html',
  styleUrls: ['./hlogin.component.scss']
})
export class HloginComponent implements OnInit {

  constructor() { }
  xyz="sign-up-mode";
  mmm=false;
  Type:Array<string>=['company','seeker','admin']
  ngOnInit(): void {
  }
  

  check1(){
    console.log("mlkjnhg")
    this.mmm=!this.mmm;
  }


}
