import { Component, OnInit } from '@angular/core';
import { read, readFile, writeFileXLSX} from "xlsx";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    

  }

}
