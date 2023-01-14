import { Component, OnInit } from '@angular/core';
import { read, readFile, writeFileXLSX} from "xlsx";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  sheetHash:Map<string,[]> = new Map<string,[]>();
  sheetNames:string[] = ["None"];
  sheetCount:Map<string,number> = new Map<string,number>();
  disableButton:boolean = true;
  showTable:boolean = false;
  constructor() { }

  DataFromEventEmitter(event){

    this.sheetHash = event;
    this.sheetNames = Array.from(this.sheetHash.keys());
    for(let i=0;i<this.sheetNames.length;i++){
      let count:number = 0;
      if(this.sheetHash.get(this.sheetNames[i])!=null){
        count = this.sheetHash.get(this.sheetNames[i]).length;
      }
      this.sheetCount.set(this.sheetNames[i],count)
    }
    // console.log(event);
    let sheet_json = JSON.stringify(this.sheetHash.get(this.sheetNames[4]))
    // console.log(sheet_json)
    if (this.sheetNames.length >0){
      this.disableButton = false;
      this.showTable = true;
    }
  }
  ngOnInit(): void {
    

  }

  submitClicked(){
    console.log("that's hot")
  }

}
