import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import {Observable,Subscriber} from 'rxjs';
import * as XLSX from "xlsx"

@Directive({
  selector: '[appReadexcel]'
})
export class ReadexcelDirective {

  excelObservable:Observable<any>;

  @Output() eventEmitter = new EventEmitter();
  constructor() { }

  @HostListener("change",["$event.target"])
  onChange(target:HTMLInputElement){
    const file = target.files[0]
    

    const excelObservable = new Observable((subscriber:Subscriber<any>) => {
      this.readFile(file,subscriber)
    });
    excelObservable.subscribe((d)=>{
      this.eventEmitter.emit(d);
    });
  }
  readFile(file:File,subscriber:Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file)


    fileReader.onload=(e)=>{
      const bufferArray = e.target.result;

      const wb:XLSX.WorkBook =  XLSX.read(bufferArray,{type:'buffer'});
      let sheets = wb.Sheets;
      let sheetMap:Map<string,any> = new Map<string,any>();
      for (var i = 0; i < wb.SheetNames.length; ++i) {
        var ws = wb.Sheets[wb.SheetNames[i]];
        const data = XLSX.utils.sheet_to_json(ws)
        sheetMap.set(wb.SheetNames[i],data);
        // subscriber.next(data);
      }
        
      subscriber.next(sheetMap)



      subscriber.complete();
    }
  }
}
