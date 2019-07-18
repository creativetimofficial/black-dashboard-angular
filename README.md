# [Black Dashboard Angular](https://demos.creative-tim.com/black-dashboard-angular/#/dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-angular%2F%23%2Fadmin%2Fdashboard&text=Black%20Dashboard%20Angular%20by%20Creative%20Tim%20%7C%20Free%20Angular%20Admin%20Template&original_referer=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-angular%2F&via=creativetim&hashtags=angular%2Ccreativetim%2Cdark%2Cdashboard%2Cbootstrap%2Cangular)



![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/black-dashboard-angular.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/black-dashboard-angular.svg?maxAge=2592000)]()  [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](./github-assets/black-dashboard-react.gif)


Black Dashboard Angular is a beautiful [Bootstrap 4](http://getbootstrap.com/) and [Angular](https://angular.io/) Admin Dashboard with a huge number of components built to fit together and look amazing. If you are looking for a tool to manage and visualize data about your business, this dashboard is the thing for you. It combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics.
Black Dashboard Angular comes packed with all plugins that you might need inside a project and documentation on how to get started. It is light and easy to use, and also very powerful.

Black Dashboard Angular features over 16 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
We thought about everything, so this dashboard comes with 2 versions, Dark Mode and Light Mode.

Special thanks go for the owners of these plugins:
- [Perfect Scrollbar](http://utatti.github.io/perfect-scrollbar/) for the nice scrollbars for windows.
- [Ng Bootstrap](https://ng-bootstrap.github.io/#/home) for the wonderful components.
- [Chartjs](https://www.chartjs.org/) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

**Example Pages** We wanted to fully display the power of this dashboard, so the kit comes packed with examples showing you how to use the components.

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-angular)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-react)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-black-dashboard)


| HTML | Angular | React | Vue |
| --- | --- | --- | --- |
| [![Black Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/93/thumb/opt_bd_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard) | [![Black Dashboard Angular](https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_angular.jpg)](https://www.creative-tim.com/product/black-dashboard-angular) | [![Black Dashboard React](https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_react.jpg)](https://www.creative-tim.com/product/black-dashboard-react) | [![Vue Black Dashboard](https://s3.amazonaws.com/creativetim_bucket/products/99/thumb/opt_bd_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-black-dashboard) |

## Demo

| Dashboard | User Profile | Tables | Maps | Notification |
| --- | --- | --- | --- | --- |
| [![Start page](./github-assets/dashboard-page.png)](https://demos.creative-tim.com/black-dashboard-angular/#/dashboard) | [![User profile page](./github-assets/user-page.png)](https://demos.creative-tim.com/black-dashboard-angular/#/user) | [![Tables page ](./github-assets/table-page.png)](https://demos.creative-tim.com/black-dashboard-angular/#/tables) | [![Maps Page](./github-assets/maps-page.png)](https://demos.creative-tim.com/black-dashboard-angular/#/maps) | [![Notification page](./github-assets/notifications-page.png)](https://demos.creative-tim.com/black-dashboard-angular/#/notifications)

[View More](https://demos.creative-tim.com/black-dashboard-angular/#/dashboard).


## Quick start

Quick start options:

- [Download from Creative Tim](https://www.creative-tim.com/product/black-dashboard-angular).

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```ng serve```
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-angular
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Navbars
    │   │   ├── AdminNavbar.jsx
    │   │   └── RTLNavbar.jsx
    │   └── Sidebar
    │       └── Sidebar.jsx
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.jsx
    │   └── RTL
    │       └── RTL.jsx
    ├── variables
    │   └── charts.jsx
    └── views
        ├── Dashboard.jsx
        ├── Icons.jsx
        ├── Map.jsx
        ├── Notifications.jsx
        ├── Rtl.jsx
        ├── TableList.jsx
        ├── Typography.jsx
        └── UserProfile.jsx
```
`
## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- Demo: https://demos.creative-tim.com/black-dashboard-angular/#/dashboard
- Download Page: https://www.creative-tim.com/product/black-dashboard-angular
- Documentation: https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/black-dashboard-angular/issues)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the black Dashboard Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the black Dashboard Angular. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-angular/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
