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
    this.api='https://localhost:5001/api/Company';
    return this._http.get<any>(this.api)
  }
  SeekergetData(){
    this.api='https://localhost:5001/api/Seeker';
    return this._http.get<any>(this.api)
  }
  JobsGetData(){
    this.api='https://localhost:5001/api/Job';
    return this._http.get<any>(this.api)
  }

}
