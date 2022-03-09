import { Component, OnInit } from '@angular/core';
import { SigninsignupServicesService } from '../shared/services/signinsignup-services.service';

@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor(private dataService: SigninsignupServicesService) {}

    ngOnInit() {
        console.log(localStorage.getItem('userType'))
    }
}
