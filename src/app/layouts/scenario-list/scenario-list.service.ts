import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScenarioListService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}
  
  )

  constructor(private http:HttpClient) {
    
   }

  getAllScenarios(): Observable<any>{
    return this.http.get(this.baseurl+"scn/",{headers:this.httpHeaders});
  }
  createScenario(f): Observable<any>{
    // console.log(scn);
    const test_add = {
      version: 1,
      description: "adding from client",
      name: f.name,
      scn_id:f.id
    }
    // const body = {id: scn.scn_id , description: scn.description, name: scn.name, version:scn.version,periods:scn.periods };
    return this.http.post(this.baseurl + 'scn/', test_add,
    {headers: this.httpHeaders});
  }



}
