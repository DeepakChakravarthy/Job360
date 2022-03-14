import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class SeekerGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('seekerlogedin')) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}
