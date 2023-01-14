import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard/:id",
    title: "Scenario Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/tables",
    title: "Tables View",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Org Chart View",
    rtlTitle: "خرائط",
    icon: "icon-support-17",
    class: "" },
  {
    path: "/import",
    title: "File Import",
    rtlTitle: "إخطارات",
    icon: "icon-upload",
    class: ""
  },
  {
    path: "/notifications",
    title: "Attribute Configuration",
    rtlTitle: "إخطارات",
    icon: "icon-settings",
    class: ""
  },
  {
    path: "/user",
    title: "Reports",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-chart-bar-32",
    class: ""
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
