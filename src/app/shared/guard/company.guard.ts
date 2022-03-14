import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CompanyGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('Companylogedin')) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}
