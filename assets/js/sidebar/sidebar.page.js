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
var bootstrap_layout_1 = require('bootstrap-layout');
var hello_world_component_1 = require('../shared/hello-world.component');
var ng2_router_active_1 = require('ng2-router-active');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var SidebarPage = (function () {
    function SidebarPage() {
        this.isCollapsed = false;
    }
    SidebarPage = __decorate([
        core_1.Component({
            selector: 'sidebar-page',
            templateUrl: '/app/sidebar/sidebar.page.html',
            // template: `
            // 	<ng2-bl-layout layout-type="fluid">
            //
            // 		<ng2-bl-navbar navbar-class="navbar-light bg-white">
            //
            // 			<!-- Navbar toggle -->
            // 			<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>
            //
            // 			<!-- Sidebar toggle -->
            // 			<button class="navbar-toggler pull-xs-left" type="button" ng2-bl-sidebar-toggle data-target="#sidebar"><span class="material-icons">menu</span></button>
            //
            // 			<!-- Brand -->
            // 			<span class="navbar-brand">Dashboard</span>
            //
            // 			<!-- Collapse -->
            // 			<div class="collapse navbar-toggleable-xs" id="navbar">
            // 				<ul class="nav navbar-nav">
            // 					<li class="nav-item" ng2-router-active><a class="nav-link" [routerLink]="['/home']">Fixed</a></li>
            // 					<li class="nav-item" ng2-router-active><a class="nav-link" [routerLink]="['/sidebar']">Sidebar</a></li>
            // 				</ul>
            // 			</div>
            // 			<!-- // END Collapse -->
            //
            // 		</ng2-bl-navbar>
            //
            // 		<ng2-bl-sidebar sidebar-id="sidebar">
            //
            // 			<!-- Brand -->
            // 			<a [routerLink]="['/home']" class="sidebar-brand m-b-0 sidebar-brand-bg sidebar-brand-border">Brand</a>
            //
            // 			<!-- Menu -->
            // 			<ul class="sidebar-menu sm-active-button-bg">
            // 				<li class="sidebar-menu-item" ng2-router-active>
            // 					<a class="sidebar-menu-button" [routerLink]="['/home']"><i class="sidebar-menu-icon material-icons">home</i> Fixed layout</a>
            // 				</li>
            // 				<li class="sidebar-menu-item" ng2-router-active>
            // 					<a class="sidebar-menu-button" [routerLink]="['/sidebar']"><i class="sidebar-menu-icon material-icons">menu</i> Sidebar layout</a>
            // 				</li>
            // 			</ul>
            // 			<!-- // END Menu -->
            //
            // 		</ng2-bl-sidebar>
            //
            // 		<!-- Breadcrumb -->
            // 		<ol class="breadcrumb">
            // 			<li><a [routerLink]="['/home']">AdminPlus</a></li>
            // 			<li class="active">Sidebar layout</li>
            // 		</ol>
            // 		<!-- // END Breadcrumb -->
            //
            // 		<hello-world></hello-world>
            //
            // 	</ng2-bl-layout>
            // `,
            directives: [
                router_1.ROUTER_DIRECTIVES,
                ng2_bootstrap_layout_1.LayoutComponent,
                ng2_bootstrap_layout_1.NavbarComponent,
                ng2_bootstrap_layout_1.SidebarToggleDirective,
                ng2_bootstrap_layout_1.SidebarComponent,
                hello_world_component_1.HelloWorldComponent,
                ng2_router_active_1.RouterActiveDirective,
                ng2_bootstrap_1.CollapseDirective
            ],
            providers: [
                bootstrap_layout_1.Sidebar,
                bootstrap_layout_1.SidebarToggle
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarPage);
    return SidebarPage;
}());
exports.SidebarPage = SidebarPage;

//# sourceMappingURL=sidebar.page.js.map
