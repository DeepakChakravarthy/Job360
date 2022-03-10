import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private _http: HttpClient) { }

  api!:string;
  userType:string='';

  CompanygetData(){
    this.api='https://job360webapi.azurewebsites.net/api/Company';
    return this._http.get<any>(this.api)
  }
  SeekergetData(){
    this.api='https://job360webapi.azurewebsites.net/api/Seeker';
    return this._http.get<any>(this.api)
  }
  JobsGetData(){
    this.api='https://job360webapi.azurewebsites.net/api/Job';
    return this._http.get<any>(this.api)
  }
  AccountsGetData(){
    this.api='https://job360webapi.azurewebsites.net/api/User';
    return this._http.get<any>(this.api)
  }

}
