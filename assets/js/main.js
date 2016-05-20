"use strict";
// Angular dependencies
require('es6-shim');
require('zone.js');
require('reflect-metadata');
// App dependencies
require('jquery');
require('simplebar');
require('tether');
require('bootstrap');
// Bootstrap application
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);

//# sourceMappingURL=main.js.map
