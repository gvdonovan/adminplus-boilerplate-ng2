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
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'hello-world',
            template: "\n\t\t<h1>Hello World</h1>\n\t\t\t\n\t\t<p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea ullam iusto asperiores repellat perspiciatis error. Quo praesentium, expedita neque natus quisquam iure consequuntur unde hic doloribus ab voluptas pariatur!</p>\n\n\t\t<div class=\"card card-block\">\n\t\t\tThis is a demo for the <a target=\"_blank\" href=\"https://github.com/themekit/adminplus-boilerplate-angular2\">adminplus-boilerplate-angular2</a> repository, using <a target=\"_blank\" href=\"https://github.com/themekit/adminplus\">AdminPlus Lite</a> and <a target=\"_blank\" href=\"https://github.com/themekit/bootstrap-layout\">Bootstrap Layout</a> with Angular 2.\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;

//# sourceMappingURL=hello-world.component.js.map
