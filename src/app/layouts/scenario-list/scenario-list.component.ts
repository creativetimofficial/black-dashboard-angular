import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ScenarioListService } from './scenario-list.service';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.scss'],
  providers: [ScenarioListService]
})
export class ScenarioListComponent implements OnInit {
  scenarios:any;
  scenarioList:Scenario[] = []
  currentScenario;
  closeResult:string;

  constructor(private scnList:ScenarioListService, private modalService:NgbModal) {
    
   }

  getScenarios = () =>{
    this.scnList.getAllScenarios().subscribe(
      data =>{
        this.scenarios = data;
        // for(let scn of this.scenarios.scenarios){
          
        //   let scnToAdd:Scenario = new Scenario();
        //   scnToAdd.scenario_id = scn.scn_id;
        //   scnToAdd.scenario = scn.name;
        //   scnToAdd.description = scn.description;
        //   scnToAdd.currentVersion =scn.version;
        //   this.scenarioList.push(scnToAdd);
        // }
      },
      error =>{
        console.log(error)
      }
    )
  }
  viewScn(scnID){
    sessionStorage.setItem("scnID",scnID)
  }
  onSubmit(f:NgForm){
    // console.log(f.value)

    this.createScenario(f.value)
  }

  createScenario = (f) => {
    console.log(f.id)
    this.scnList.createScenario(f).subscribe(
      data => {
        // this.scenarios.push(data);
        this.getScenarios();
      },
      error => {
        console.log(error);
      }
    );
    
  }
  ngOnInit(): void {
    this.getScenarios();
  }



	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}

export class Scenario{
  scenario_id:number=0;
  scenario:string="";
  description:string="";
  periods:string="";
  currentVersion:number = 0;

}
