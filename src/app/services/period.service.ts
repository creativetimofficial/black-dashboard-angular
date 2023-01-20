import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  endpoint = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  period:any;
  constructor(private http:HttpClient) { 
    
  }

  pullPeriod(){
    let queryParams = {"scn_id":sessionStorage.getItem("scnID"),"version":sessionStorage.getItem("scnVersion")}
    return this.http.get(this.endpoint+"pd/",{headers:this.httpHeaders,params:queryParams})
  }



}
