import { Component, OnInit } from '@angular/core';
import { read, readFile, writeFileXLSX } from "xlsx";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  sheetHash: Map<string, []> = new Map<string, []>();
  // sheetNames:string[] = ["None"];
  sheetCount: Map<string, number> = new Map<string, number>();
  sheetInfo: Map<string, SheetInfo> = new Map<string, SheetInfo>();
  disableButton: boolean = true;
  showTable: boolean = false;
  validColumns:boolean = true;
  sheetHeaders: Map<string,string[]> = new Map([
    ['relationships', ['parent','child','ownershippercentage']],
    ['things', ['thing','type','country','isocurrencycode','period']],
    ['accounts', ['accountname','amount','isocurrencycode','period','collection','entity']],
    ['adjustments', ['accountname','adjustmenttype','adjustmentclass','adjustmentamount','isocurrencycode','adjustmentperiod','adjustmentpercentage','entity']],
    ['attributes', ['attributename','attributevalue','attributestartdate','entity','period']],
  ]);

    
  


  constructor() { }

  DataFromEventEmitter(event) {

    console.log(event)
    this.sheetHash = event;
    this.verifySheetInfo();
    // this.sheetNames = Array.from(this.sheetHash.keys());
    // for(let i=0;i<this.sheetNames.length;i++){
    //   let count:number = 0;
    //   if(this.sheetHash.get(this.sheetNames[i])!=null){
    //     count = this.sheetHash.get(this.sheetNames[i]).length;
    //   }
    //   this.sheetCount.set(this.sheetNames[i],count)
    // }
    // // console.log(event);
    // let sheet_json = JSON.stringify(this.sheetHash.get(this.sheetNames[4]))
    // // console.log(sheet_json)
    if (Array.from(this.sheetHash.keys()).length >0){
      this.disableButton = !this.validColumns
      this.showTable = true;
    }
    
  }
  ngOnInit(): void {


  }


  private verifySheetInfo() {

    let sheetNames: string[] = Array.from(this.sheetHash.keys());
    

    // for each sheet...
    for (let i = 0; i < sheetNames.length; i++) {
      let sInfo = new SheetInfo();
      
      if (this.sheetHash.get(sheetNames[i]) != null) {
        sInfo.rowCount = this.sheetHash.get(sheetNames[i]).length;
      }
      
      let sheet_json = this.sheetHash.get(sheetNames[i]);
      

      
      // check headers
      for(var key in sheet_json){ // this line only runs once lol
        let headers:string[] = Object.keys(sheet_json[key]);
       

        if(Array.from(this.sheetHeaders.keys()).includes(sheetNames[i].toLowerCase().replace(/\s/g, ""))){
          let testheaders = JSON.parse(JSON.stringify(this.sheetHeaders.get(sheetNames[i].toLowerCase().replace(/\s/g, ""))));
          if (Array.from(testheaders.includes(sheetNames[i]))){
            sInfo.included = true;
          }
          // console.log(testheaders);
          for(let header in headers){
  
            let headerIndex = testheaders.indexOf(headers[header].toLowerCase().replace(/\s/g, ""));
            if (headerIndex >= 0){
              testheaders.splice(headerIndex,1);
  
            }
          }
          if (testheaders.length>0){
            this.validColumns = false;
  
          }
     
          sInfo.missingColumns=testheaders;
        }
        else{
          this.validColumns = false;
          
        }


        break;
      }
    
      this.sheetInfo.set(sheetNames[i],sInfo);
    }
    console.log(this.sheetInfo);
  }
  submitClicked() {
    console.log("that's hot")
  }

}
export class SheetInfo {
  rowCount: number = 0;
  included: boolean = false;
  missingColumns: string[] = [];
  constructor(){}
}