import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class JobServicesService {
  api!:string;
  constructor(private _http:HttpClient) { }

  jobListGetApi(){
    this.api='https://job360webapi.azurewebsites.net/api/Job';
    return this._http.get(this.api)
  }

  createJobPostApi(form:any){
    this.api='https://job360webapi.azurewebsites.net/api/Job';
    return this._http.post(this.api,form)
  }

  
  
}
