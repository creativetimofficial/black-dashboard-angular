import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../components/sidebar/sidebar.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  public menuItems: any[];
  test: Date = new Date();
  closeResult: string;
  public sidebarColor: string = "red";

  constructor(private router: Router, private modalService: NgbModal) { }
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // on this page, we need on the body tag the classes .rtl and .menu-on-right
    document.body.classList.add("rtl", "menu-on-right");
    // we also need the rtl bootstrap
    // so we add it dynamically to the head
    let head = document.head;
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "rtl-id";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
    head.appendChild(link);

  }
  ngOnDestroy() {
    // when we exit this page, we need to delete the classes .rtl and .menu-on-right
    // from the body tag
    document.body.classList.remove("rtl", "menu-on-right");
    // we also need to delete the rtl bootstrap, so it does not break the other pages
    // that do not make use of rtl
    document.getElementById("rtl-id").remove();
  }
  open(content) {
    this.modalService.open(content, {windowClass: 'modal-search'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
