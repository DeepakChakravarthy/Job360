import { Component, OnInit } from '@angular/core';
import { SigninsignupServicesService } from '../shared/services/signinsignup-services.service';
import { ActivatedRoute, Router} from '@angular/router'


@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor(private dataService: SigninsignupServicesService,private router:Router) {}

    ngOnInit() {
       
    }

    
    loginNavigation()
{
    this.router.navigate(['login'])
}    
}
