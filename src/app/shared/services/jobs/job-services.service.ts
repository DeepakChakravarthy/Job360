import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class JobServicesService {
  api!:string;
  jobId!:number;
  loader:boolean=false;
  constructor(private _http:HttpClient) { }


  //Dependencies Injectable
  jobListGetApi(){
    this.api='https://job360webapi.azurewebsites.net/api/Job';
    return this._http.get(this.api)
  }

  createJobPostApi(form:any){
    this.api='https://job360webapi.azurewebsites.net/api/Job';
    return this._http.post(this.api,form)
  }


  jobDescripitionGetApi(){
    this.api='https://job360webapi.azurewebsites.net/api/Job/'+this.jobId;
    return this._http.get(this.api)
  }

  
  companyIdGetApi(){
    this.api = 'https://job360webapi.azurewebsites.net/api/Company/retrievecompanydata/'+localStorage.getItem('UserId')
    return this._http.get(this.api)
  }


  jobAppliedPostApi(form){
    this.api='https://job360webapi.azurewebsites.net/api/JobsApplied';
    return this._http.post(this.api,form)
  }

  userReterive(){
    this.api='https://job360webapi.azurewebsites.net/api/Seeker/retrieveseekerdata/'+localStorage.getItem('UserId')
    return this._http.get(this.api)
  }
  
}
