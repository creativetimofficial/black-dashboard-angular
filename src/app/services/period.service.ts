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

  getPeriod=()=>{

    return this.pullPeriod().subscribe(
      data =>{
        let period_list = [];
        // console.log(data)
        let periods = Array.from(Object.keys(data));

        // UPDATE THIS TO DISPLAY DATE RANGE AND MOVE TO SERVICE
        for (let p of periods){
          
          for(let name in data[p]){
            // console.log(data[p][name])
            period_list.push(data[p][name])
          }
          break;
        }

        // console.log("hi hi ")
        let period_string = period_list[0]["period"];
        if (period_list.length>1){
          period_string = period_list[0]["period"] + " - " + period_list[period_list.length-1]["period"]
        }

        // console.log(period_string)
        this.period= period_string

        return this.period

      });
      
  }
  

}
