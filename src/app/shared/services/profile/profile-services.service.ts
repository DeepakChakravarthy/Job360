import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileServicesService {

  constructor(private _http: HttpClient) { }
  api!:string;
  token=localStorage.getItem('Token')


  personalDetailsApi(form:any){
    this.api= 'https://job360webapi.azurewebsites.net/api/Seeker';
    return this._http.post(this.api, form)
  }

  EducationDetailsApi(form:any){
    this.api='https://job360webapi.azurewebsites.net/api/SeekerQualification';
    //this.api='https://localhost:5001/api/SeekerQualification';
    return this._http.post(this.api, form)
  }

  ExperienceDetailsApi(form:any){
    this.api='https://job360webapi.azurewebsites.net/api/Experience';
    return this._http.post(this.api, form)
  }

  CompanyProfileApi(form:any){
    this.api='https://job360webapi.azurewebsites.net/api/Company';
    return this._http.post(this.api, form)
  }

  userProfile(){
    this.api='https://job360webapi.azurewebsites.net/api/seeker/'+localStorage.getItem('UserId');
    return this._http.get(this.api)
  }

  userReterive(){
    this.api='https://job360webapi.azurewebsites.net/api/Seeker/retrieveseekerdata'+localStorage.getItem('UserId')
    return this._http.get(this.api)
  }
}
