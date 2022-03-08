import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.scss']
})
export class CompanyNavbarComponent implements OnInit {
  

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  jobPost(){
    this.router.navigate(['jobPost'], {relativeTo:this.route});
  }
}
