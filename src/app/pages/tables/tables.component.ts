import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { TablesService } from './tables.service';
import { PeriodService } from 'src/app/services/period.service';
@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {

  constructor(private http:HttpClient, private tablesService:TablesService, private periodService:PeriodService) {}
  currentTable:any;
  currentTableName:string;
  period:string;
  tableRows:string[] = []
  obj:any;
  tableList:string[]=Array.from(this.tablesService.pathMap.keys());
  currentTableHeaders:string[] = [];
  ngOnInit() {
    // this.obj = this.http.get("http://127.0.0.1:8000/scn/").subscribe(
    //   data => this.obj = data
    // );

    // console.log(this.obj)
    // this.getPeriod()
    // console.log(this.getPeriod())
    console.log(this.period)
    this.period = this.periodService.getPeriod()  
  }

  // getPeriod=()=>{

  //   return this.periodService.pullPeriod().subscribe(
  //     data =>{
  //       let period_list = [];
  //       // console.log(data)
  //       let periods = Array.from(Object.keys(data));

  //       // UPDATE THIS TO DISPLAY DATE RANGE AND MOVE TO SERVICE
  //       for (let p of periods){
          
  //         for(let name in data[p]){
  //           // console.log(data[p][name])
  //           period_list.push(data[p][name])
  //         }
  //         break;
  //       }
  //       // console.log("hi hi ")
  //       let period_string = period_list[0]["period"];
  //       if (period_list.length>1){
  //         period_string = period_list[0]["period"] + " - " + period_list[period_list.length-1]["period"]
  //       }

  //       // console.log(period_string)
  //       this.period= period_string


  //     });
      
  // }
  pullTable = (table:string) =>{
    this.currentTable = [];

    this.tablesService.getTable(table).subscribe(
      data =>{
        this.currentTable = data;
        // console.log(data)
        this.currentTableName = table;
        this.currentTable = this.currentTable[this.tablesService.tableKeyMap.get(table)];
        for(let t of this.currentTable){
          this.currentTableHeaders = Array.from(Object.keys(t))
          // for(var j in val){
          //     var sub_key = j;
          //     var sub_val = val[j];
          //     console.log(sub_key);
          // }
          break;
        }
    
        // console.log(this.currentTable)
        // console.log(this.currentTableHeaders)
      },
      error =>{
        console.log(error)
      }
    )
  }
}
