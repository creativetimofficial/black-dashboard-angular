import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}
  
  )
  constructor(private http:HttpClient) { 
    
  }
  getVersionLog(){
    let queryParams = {"scn_id":sessionStorage.getItem("scnID")};
    return this.http.get(this.baseurl + 'scn/',{params:queryParams})
  }

  // Right now, create period only creates for one single period
  createPeriod(f):Observable<any>{
    console.log(f)
    if (f.period_start == f.period_end){
      console.log(f)
      const period = {
        period:f.period_start,
        begin_date: new Date(f.begin_date),
        end_date: new Date(f.end_date),
        scn_id: sessionStorage.getItem("scnID"),
        scn_version:sessionStorage.getItem("scnVersion"),
      }
      return this.http.post(this.baseurl + 'pd/', period,
      {headers: this.httpHeaders});
    }

  }
}
