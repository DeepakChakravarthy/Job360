import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  profilebtn(){
    this.router.navigate(['Profile'],{relativeTo:this.route})

  }

  SeekerHomebtn(){
    this.router.navigate(['/seeker'],{relativeTo:this.route})
  }
  Logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }


}
