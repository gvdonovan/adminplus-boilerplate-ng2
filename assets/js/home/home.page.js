"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ng2_bootstrap_layout_1 = require('ng2-bootstrap-layout');
var index_1 = require('../shared/index');
var ng2_router_active_1 = require('ng2-router-active');
var HomePage = (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        core_1.Component({
            selector: 'home-page',
            template: "\n\t\t<ng2-bl-layout layout-type=\"fixed\">\n\n\t\t\t<ng2-bl-navbar>\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\n\t\t\t\t\t<!-- Navbar toggle -->\n\t\t\t\t\t<button class=\"navbar-toggler hidden-md-up pull-xs-right last-child-xs\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"><span class=\"material-icons\">menu</span></button>\n\n\t\t\t\t\t<!-- Brand -->\n\t\t\t\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">Brand</a>\n\n\t\t\t\t\t<!-- Collapse -->\n\t\t\t\t\t<div class=\"collapse navbar-toggleable-xs\" id=\"navbar\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t<li class=\"nav-item\" ng2-router-active><a class=\"nav-link\" [routerLink]=\"['/home']\">Fixed</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\" ng2-router-active><a class=\"nav-link\" [routerLink]=\"['/sidebar']\">Sidebar</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- // END Collapse -->\n\n\t\t\t\t</div>\n\t\t\t</ng2-bl-navbar>\n\n\t\t\t<!-- Breadcrumb -->\n\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t<li><a [routerLink]=\"['/home']\">AdminPlus</a></li>\n\t\t\t\t<li class=\"active\">Fixed layout</li>\n\t\t\t</ol>\n\t\t\t<!-- // END Breadcrumb -->\n\n\t\t\t<hello-world></hello-world>\n\n\t\t</ng2-bl-layout>\n\t",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                ng2_bootstrap_layout_1.LayoutComponent,
                ng2_bootstrap_layout_1.NavbarComponent,
                index_1.HelloWorldComponent,
                ng2_router_active_1.RouterActiveDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;

//# sourceMappingURL=home.page.js.map
