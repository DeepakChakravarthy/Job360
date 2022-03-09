import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninsignupServicesService {

  constructor(private _http: HttpClient) { }

  api!:string;
  userType:string='';

  login(form:any){
    this.api="https://localhost:5001/api/User/authenticate";

    return this._http.post(this.api, form)
  }

}
