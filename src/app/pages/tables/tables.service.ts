import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  endpoint = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  pathMap:Map<string,string> = new Map<string, string>([
    ["Thing Tables", "entity/"],
    ["Attributes Tables", "atr/"],
    ["Accounts Tables", "acc/"],
    ["Adjustments Tables","adj/"],
  ]);
  tableKeyMap:Map<string,string> = new Map<string, string>([
    ["Thing Tables", "entities"],
    ["Attributes Tables", "attributes"],
    ["Accounts Tables", "accounts"],
    ["Adjustments Tables","adjustments"],
  ]);

  constructor(private http:HttpClient) { }

  getTable(table:string): Observable<any>{
    let path:string = this.pathMap.get(table);
    return this.http.get(this.endpoint+path,{headers:this.httpHeaders});
  }
}
