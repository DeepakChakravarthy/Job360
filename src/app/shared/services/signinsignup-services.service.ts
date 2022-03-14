import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninsignupServicesService {

  constructor(private _http: HttpClient) { }

  api!:string;
  userType:string='';
  loader:boolean=false;

  //dependency injuction
  login(form:any){
    this.api="https://job360webapi.azurewebsites.net/api/User/authenticate";

    return this._http.post(this.api, form)
  }

  signupServices(form:any){
    this.api='https://job360webapi.azurewebsites.net/api/User';
    return this._http.post(this.api,form)
  }

}
