import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { TablesService } from './tables.service';
@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {

  constructor(private http:HttpClient, private tablesService:TablesService) {}
  currentTable:any;
  currentTableName:string;

  tableRows:string[] = []
  obj:any;
  tableList:string[]=Array.from(this.tablesService.pathMap.keys());
  currentTableHeaders:string[] = [];

  ngOnInit() {
    // this.obj = this.http.get("http://127.0.0.1:8000/scn/").subscribe(
    //   data => this.obj = data
    // );

    // console.log(this.obj)
  }
  pullTable = (table:string) =>{
    this.currentTable = [];

    this.tablesService.getTable(table).subscribe(
      data =>{
        this.currentTable = data;
        console.log(data)
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
