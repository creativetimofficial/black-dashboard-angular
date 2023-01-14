import { Component, OnInit } from '@angular/core';
import { read, readFile, writeFileXLSX} from "xlsx";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  private sheetHash:Map<string,[]> = new Map<string,[]>();
  private sheetNames:string[] = ["None"];
  disableButton:boolean = true;
  constructor() { }

  DataFromEventEmitter(event){

    this.sheetHash = event;
    this.sheetNames = Array.from(this.sheetHash.keys());
    // console.log(event);
    let sheet_json = JSON.stringify(this.sheetHash.get(this.sheetNames[4]))
    // console.log(sheet_json)
    if (this.sheetNames.length >0){
      this.disableButton = false;
    }
  }
  ngOnInit(): void {
    

  }

  submitClicked(){
    console.log("that's hot")
  }

}
