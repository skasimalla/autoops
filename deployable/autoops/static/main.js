(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'OperationApproval', component: _components__WEBPACK_IMPORTED_MODULE_2__["OperationApprovalComponent"] },
    { path: 'dashboard', component: _components__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'landingpage', component: _components__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'requestpage', component: _components__WEBPACK_IMPORTED_MODULE_2__["RequestPageComponent"] },
    { path: 'requestStatus', component: _components__WEBPACK_IMPORTED_MODULE_2__["RequestStatusComponent"] },
    { path: 'register', component: _components__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'registerStatus', component: _components__WEBPACK_IMPORTED_MODULE_2__["RegisterStatusComponent"] },
    { path: 'reject', component: _components__WEBPACK_IMPORTED_MODULE_2__["RejectComponent"] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router, _storeService, _listDataService) {
        this._router = _router;
        this._storeService = _storeService;
        this._listDataService = _listDataService;
        this.title = 'coat3ui';
        console.log('app constructor: ', window.location.href);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('app on init: ', window.location.href);
        this._listDataService.getCommandList()
            .subscribe(function (result) {
            _this._storeService.ActionListData = result;
            console.log('app on init: ', window.location.href);
            //      this._router.navigate(['/login']);
        }, function (error) {
            console.log(error.msg);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ListDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _custom_controls_option_filter_option_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-controls/option-filter/option-filter.component */ "./src/app/custom-controls/option-filter/option-filter.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = /** @class */ (function () {
    function AppModule() {
        // Add an icon to the library for convenient access in other components
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faClock"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faChartLine"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faBullseye"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faSearch"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["OperationApprovalComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RequestPageComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RequestStatusComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RegisterStatusComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RejectComponent"],
                _custom_controls_option_filter_option_filter_component__WEBPACK_IMPORTED_MODULE_9__["OptionFilterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_10__["StoreService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["ListDataService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["RequestService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lg-image {\n    height: 90px;\n    width: 90px;\n}\n\n.sm-image {\n    height: 60px;\n    width: 60px;\n}\n\n.footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsWUFBWTtJQUNaLE9BQU87SUFDUCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGctaW1hZ2Uge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogOTBweDtcbn1cblxuLnNtLWltYWdlIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDMwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"text-center\" style=\"font-size: x-large\">\n        Dashboard\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    background-color: #343a40;\n    color: #fff;\n    max-height: 12%;\n  }\n\n.row {\n    align-items: center;\n}\n\n.logos  {\n    align-items: center;\n    justify-content: space-between;\n    flex-grow: 1;\n}\n\n.icon-home {\n    border-right: 1px solid rgba(0,0,0,.2);\n}\n\n.icon-home i {\n    color: #fff;\n    font-size: 2.5rem;\n}\n\n.coats-logo {\n    height: 4%;\n    width: 4%;\n    color: #007bff!important;\n}\n\nimg {\n    color: #007bff!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBRUY7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWF4LWhlaWdodDogMTIlO1xuICB9XG5cbi5yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvcyAge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmljb24taG9tZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG59XG5cbi5pY29uLWhvbWUgaSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5jb2F0cy1sb2dvIHtcbiAgICBoZWlnaHQ6IDQlO1xuICAgIHdpZHRoOiA0JTtcbiAgICBjb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gICAgY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm header\">\n    <div class=\"row d-flex\">\n        <div class=\"ml-3\">Safely\n            <span class=\"logos\">\n                <img class=\"navImage coats-logo\" src=\"assets/images/bullseye.svg\">\n            </span>\n            Ops\n        </div>\n    </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: DashboardComponent, HeaderComponent, LoginComponent, OperationApprovalComponent, RegisterComponent, RegisterStatusComponent, RejectComponent, LandingPageComponent, RequestPageComponent, RequestStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });

/* harmony import */ var _operation_approval_operation_approval_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-approval/operation-approval.component */ "./src/app/components/operation-approval/operation-approval.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationApprovalComponent", function() { return _operation_approval_operation_approval_component__WEBPACK_IMPORTED_MODULE_3__["OperationApprovalComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]; });

/* harmony import */ var _register_status_register_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-status/register-status.component */ "./src/app/components/register-status/register-status.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterStatusComponent", function() { return _register_status_register_status_component__WEBPACK_IMPORTED_MODULE_5__["RegisterStatusComponent"]; });

/* harmony import */ var _reject_reject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reject/reject.component */ "./src/app/components/reject/reject.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RejectComponent", function() { return _reject_reject_component__WEBPACK_IMPORTED_MODULE_6__["RejectComponent"]; });

/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"]; });

/* harmony import */ var _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-page/request-page.component */ "./src/app/components/request-page/request-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestPageComponent", function() { return _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_8__["RequestPageComponent"]; });

/* harmony import */ var _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-status/request-status.component */ "./src/app/components/request-status/request-status.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestStatusComponent", function() { return _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_9__["RequestStatusComponent"]; });













/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-dark {\n    color: var(--darkBlue);\n}\n\n.landing-page-btn {\n    background-color: var(--medBlue);\n    padding: 30px 30px;\n}\n\n.landing-page-btn:hover {\n    background-color: lightblue;\n}\n\n.lg-image {\n    height: 90px;\n    width: 200px;\n}\n\nfa-icon {\n    color: white;\n    margin-bottom: 50px;\n}\n\n/*.landing-page-icon {\n    padding-bottom: 90px;\n    margin-bottom: 20px;\n}c*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZGFyayB7XG4gICAgY29sb3I6IHZhcigtLWRhcmtCbHVlKTtcbn1cblxuLmxhbmRpbmctcGFnZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZEJsdWUpO1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cblxuLmxhbmRpbmctcGFnZS1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLmxnLWltYWdlIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG5mYS1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLyoubGFuZGluZy1wYWdlLWljb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59YyovIl19 */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"mt-3 row\">\n        <div class=\"col-2 text-dark\">Reports</div>\n        <div class=\"offset-3 col-2 text-dark\">Activities</div>\n    </div>\n\n    <div class=\"mt-2 row\">\n        <div class=\" col-2 text-dark\">\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"premiumVersionFeature()\">\n                <fa-icon [icon]=\"['fas', 'chart-line']\" size=\"5x\"></fa-icon>\n                <div class=\"text-white text-center mt-3\">Dashboard</div>\n            </button>\n        </div>\n        <div class=\"col-2 text-dark\">\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"premiumVersionFeature()\">\n                <fa-icon [icon]=\"['far', 'clock']\" size=\"5x\"></fa-icon>\n                <div class=\"text-white text-center mt-3\">History</div>\n            </button>\n        </div>\n        <div class=\"offset-1 col-2 text-dark\">\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"premiumVersionFeature()\">\n                <fa-icon [icon]=\"['fas', 'search']\" size=\"5x\"></fa-icon>\n                <div class=\"text-white text-center mt-3\">Advanced Search</div>\n            </button>\n        </div>\n        <div class=\"col-2 text-dark\">\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"premiumVersionFeature()\">\n                <fa-icon [icon]=\"['far', 'user']\" size=\"5x\"></fa-icon>\n                <div class=\"text-white text-center mt-3\">Profile</div>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"mt-3 row\">\n\n        <div class=\" col-2 text-dark\">\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"routeToRequest()\">\n                <fa-icon [icon]=\"['fas', 'plus']\" size=\"5x\"></fa-icon>\n                <div class=\"text-white text-center mt-3\">Request</div>\n            </button>\n        </div>\n        <div class=\"col-2 text-dark\">\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"premiumVersionFeature()\">\n                <fa-icon [icon]=\"['fas', 'check']\" size=\"5x\"></fa-icon>\n                <div class=\"text-white text-center mt-3\">Approve</div>\n            </button>\n        </div>\n\n    </div>\n\n</div>\n\n<ng-template #modalDialog class=\"modal fade\" let-c=\"close\" let-d=\"dismiss\" role=\"dialog\">\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Premium Version Feature</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <em class=\"col-12 mt-4 lead\">Please visit the website for the premium version</em>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onOk()\">OK</button>\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(_modalService, _router) {
        this._modalService = _modalService;
        this._router = _router;
        this.modalRef = null;
        this.modalOption = { backdrop: 'static', 'keyboard': false, 'size': 'lg' };
    }
    LandingPageComponent.prototype.routeToRequest = function () {
        this._router.navigate(['/requestpage']);
    };
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.ngOnDestroy = function () {
    };
    LandingPageComponent.prototype.premiumVersionFeature = function () {
        this.modalRef = this._modalService.open(this.modalDlg, this.modalOption);
    };
    LandingPageComponent.prototype.onOk = function () {
        this.modalRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalDialog'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingPageComponent.prototype, "modalDlg", void 0);
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.03);\n    max-width: 600px;\n}\n\nul {\n    list-style: none;\n}\n\n.vl {\n    border-right: 1px solid #ccc;\n}\n\n.btn-link {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osT0FBTztJQUNQLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMzA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udmwge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5idG4tbGluayB7XG4gICAgY29sb3I6Z3JleTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container  shadow-lg mt-5 pt-3 pb-3 rounded background\">\n\n    <div class=\"row mt-5\">\n        <div style=\"float: none; margin: 0 auto;\">\n            <input class=\"form-control\" [formControl]=\"userNameCtrl\" placeholder=\"Username\" [ngClass]=\"{'is-invalid': userNameCtrl.invalid && userNameCtrl.dirty}\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div style=\"float: none; margin: 0 auto;\">\n            <input type=\"password\" class=\"form-control\" [formControl]=\"passWordCtrl\" placeholder=\"Password\" [ngClass]=\"{'is-invalid': passWordCtrl.invalid && passWordCtrl.dirty}\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-4\">\n        <div style=\"float: none; margin: 0 auto;\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"login()\">Login</button>\n        </div>\n    </div>\n\n    <div *ngIf=\"showError\" class=\"row mt-5\">\n        <div style=\"float: none; margin: 0 auto;\" class=\"text-danger\">UserId and/or password is not correct</div>\n    </div>\n\n    <div class=\"text-center my-5\">\n        <a [routerLink]=\"['/register']\">New users please click on this link to register</a>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, _router, _storeService, _authenticationService) {
        this._fb = _fb;
        this._router = _router;
        this._storeService = _storeService;
        this._authenticationService = _authenticationService;
        this.userNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.userNameCtrlName = 'userName';
        this.passWordCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.passWordCtrlName = 'passWord';
        this.showError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
        this.form.addControl(this.userNameCtrlName, this.userNameCtrl);
        this.form.addControl(this.passWordCtrlName, this.passWordCtrl);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.form.removeControl(this.userNameCtrlName);
        this.form.removeControl(this.passWordCtrlName);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var userName = this.userNameCtrl.value;
        var passWord = this.passWordCtrl.value;
        //   this._router.navigate(['/landingpage']);
        this._authenticationService.authenticate(userName, passWord)
            .subscribe(function (result) {
            if (result) {
                var user = new _models__WEBPACK_IMPORTED_MODULE_4__["User"](userName, '', '', '', '');
                _this._storeService.User = user;
                _this._router.navigate(['/landingpage']);
            }
            else {
                {
                    _this.showError = true;
                }
            }
        }, function (error) {
            _this.showError = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/operation-approval/operation-approval.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/operation-approval/operation-approval.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.03);\n    max-width: 600px;\n}\n\nul {\n    list-style: none;\n}\n\n.vl {\n    border-right: 1px solid #ccc;\n}\n\n.btn-link {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVyYXRpb24tYXBwcm92YWwvb3BlcmF0aW9uLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29wZXJhdGlvbi1hcHByb3ZhbC9vcGVyYXRpb24tYXBwcm92YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDMwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnZsIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYnRuLWxpbmsge1xuICAgIGNvbG9yOmdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/operation-approval/operation-approval.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/operation-approval/operation-approval.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow-lg mt-5 pt-3 pb-3 rounded background\">\n\n    <div class=\"row mt-3\">\n        <div class=\"col-12 text-center\" style=\"font-size: 14px\">Transaction Id: <span style=\"color: blue\"><em>{{transactionId}}</em></span></div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 text-right\">User Name:</div>\n        <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"userNameCtrl\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 text-right\">Password:</div>\n        <div class=\"col-9\">\n            <input type=\"password\" class=\"form-control\" [formControl]=\"passwordCtrl\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 text-right\">Type:</div>\n        <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"typeCtrl\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 text-right\">Token:</div>\n        <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"tokenCtrl\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-4\" *ngIf=\"showSubmitButton\">\n        <div class=\"offset-4 col-2\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"submit()\">Submit</button>\n        </div>\n    </div>\n\n    <div class=\"row my-5\" *ngIf=\"!showSubmitButton\">\n        <div class=\"offset-3 col-8\">\n            <a [routerLink]=\"['/landingpage']\">Return to dashboard</a>\n        </div>\n\n    </div>\n</div>\n\n<ng-template #modalDialog class=\"modal fade\" let-c=\"close\" let-d=\"dismiss\" role=\"dialog\">\n\n    <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"selectContactType\">{{headerMessage}}</h3>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div *ngIf=\"!modalMsg\">\n            <div class=\"row\">\n                <div class=\"col-12 mt-4 lead\">Your approval has been registered for {{transactionId}}. The operation is being</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 mt-4 lead\">performed. Both you and the requestor will receive an email shortly.</div>\n            </div>\n        </div>\n\n        <div *ngIf=\"modalMsg\">\n                <div class=\"row\">\n                    <div class=\"col-12 mt-4 lead\">{{modalMsg}}</div>\n                </div>\n            </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onOk()\">OK</button>\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/operation-approval/operation-approval.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/operation-approval/operation-approval.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperationApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationApprovalComponent", function() { return OperationApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _utilities_misc_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/misc-utilities */ "./src/app/utilities/misc-utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OperationApprovalComponent = /** @class */ (function () {
    function OperationApprovalComponent(_fb, _router, _requestService, _modalService, _storeService, _authenticationService) {
        this._fb = _fb;
        this._router = _router;
        this._requestService = _requestService;
        this._modalService = _modalService;
        this._storeService = _storeService;
        this._authenticationService = _authenticationService;
        this.modalRef = null;
        this.modalOption = { backdrop: 'static', 'keyboard': false, 'size': 'lg' };
        this.userNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.userNameCtrlName = 'userName';
        this.passwordCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.passwordCtrlName = 'passwordCtrlName';
        this.typeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.typeCtrlName = 'typeCtrlName';
        this.tokenCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.tokenCtrlName = 'tokenCtrlName';
        this.showError = false;
        this.showSubmitButton = true;
        this.transactionId = '';
        this.transactionId = _utilities_misc_utilities__WEBPACK_IMPORTED_MODULE_5__["MiscUtilities"].getParameterByName('txnNumber');
    }
    OperationApprovalComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
        this.form.addControl(this.userNameCtrlName, this.userNameCtrl);
        this.form.addControl(this.passwordCtrlName, this.passwordCtrl);
        this.form.addControl(this.typeCtrlName, this.typeCtrl);
        this.form.addControl(this.tokenCtrlName, this.tokenCtrl);
    };
    OperationApprovalComponent.prototype.ngOnDestroy = function () {
        this.form.removeControl(this.userNameCtrlName);
        this.form.removeControl(this.passwordCtrlName);
        this.form.removeControl(this.typeCtrlName);
        this.form.removeControl(this.tokenCtrlName);
    };
    OperationApprovalComponent.prototype.submit = function () {
        var _this = this;
        var userName = this.userNameCtrl.value;
        var password = this.passwordCtrl.value;
        var type = this.typeCtrl.value;
        var token = this.tokenCtrl.value;
        this._requestService.performAnOperation(this.transactionId, userName, password, type, token)
            .subscribe(function (result) {
            console.log(result);
            _this.modalMsg = '';
            _this.headerMessage = 'Successful Operation';
            _this.modalRef = _this._modalService.open(_this.modalDlg, _this.modalOption);
        }, function (error) {
            console.log(error.msg);
            _this.headerMessage = 'Unsuccessful Operation';
            _this.modalMsg = 'Your request encountered an error';
            _this.modalRef = _this._modalService.open(_this.modalDlg, _this.modalOption);
        });
        this.showSubmitButton = false;
    };
    OperationApprovalComponent.prototype.onOk = function () {
        this.modalRef.close();
        this._router.navigate(['/landingpage']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalDialog'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OperationApprovalComponent.prototype, "modalDlg", void 0);
    OperationApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operation-approval',
            template: __webpack_require__(/*! ./operation-approval.component.html */ "./src/app/components/operation-approval/operation-approval.component.html"),
            styles: [__webpack_require__(/*! ./operation-approval.component.css */ "./src/app/components/operation-approval/operation-approval.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["RequestService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], OperationApprovalComponent);
    return OperationApprovalComponent;
}());



/***/ }),

/***/ "./src/app/components/register-status/register-status.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/register-status/register-status.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.03);\n    max-width: 600px;\n}\n\nul {\n    list-style: none;\n}\n\n.vl {\n    border-right: 1px solid #ccc;\n}\n\n.btn-link {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1zdGF0dXMvcmVnaXN0ZXItc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyLXN0YXR1cy9yZWdpc3Rlci1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDMwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnZsIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYnRuLWxpbmsge1xuICAgIGNvbG9yOmdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/register-status/register-status.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/register-status/register-status.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow-lg mt-5 pt-3 pb-3 rounded background\">\n\n    <div class=\"row mt-5\">\n        <div class=\"col-12 text-center\">\n            Your approval has been registered for the operation is being performed\n        </div>\n        <div class=\"col-12 text-center\">\n            and both you and the requestor will shortly receive an email.\n        </div>\n    </div>\n\n    <div class=\"row my-5\">\n        <div class=\"col-12 text-center\">\n            <a [routerLink]=\"['/landingpage']\">Return to dashboard</a>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/register-status/register-status.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/register-status/register-status.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStatusComponent", function() { return RegisterStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterStatusComponent = /** @class */ (function () {
    function RegisterStatusComponent(_fb, _router, _storeService, _authenticationService) {
        this._fb = _fb;
        this._router = _router;
        this._storeService = _storeService;
        this._authenticationService = _authenticationService;
        this.showError = false;
        this.showSubmitButton = true;
        this.transactionId = '9999999';
    }
    RegisterStatusComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
    };
    RegisterStatusComponent.prototype.ngOnDestroy = function () {
    };
    RegisterStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-status',
            template: __webpack_require__(/*! ./register-status.component.html */ "./src/app/components/register-status/register-status.component.html"),
            styles: [__webpack_require__(/*! ./register-status.component.css */ "./src/app/components/register-status/register-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], RegisterStatusComponent);
    return RegisterStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.03);\n    max-width: 600px;\n}\n\nul {\n    list-style: none;\n}\n\n.vl {\n    border-right: 1px solid #ccc;\n}\n\n.btn-link {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osT0FBTztJQUNQLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMzA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udmwge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5idG4tbGluayB7XG4gICAgY29sb3I6Z3JleTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container  shadow-lg mt-5 pt-3 pb-3 rounded background\">\n\n    <div class=\"row mt-5\">\n        <div class=\"col-3 right-text\">Name:</div>\n        <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"userNameCtrl\" [ngClass]=\"{'is-invalid': userNameCtrl.invalid && userNameCtrl.dirty}\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 right-text\">Email:</div>\n        <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"emailCtrl\" [ngClass]=\"{'is-invalid': emailCtrl.invalid && emailCtrl.dirty}\" />\n        </div>\n    </div>\n\n\n    <div class=\"row mt-4\" *ngIf=\"showSubmitButton\">\n        <div class=\"offset-5 col-2\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"register()\">Submit</button>\n        </div>\n    </div>\n\n    <div class=\"row my-5\" *ngIf=\"!showSubmitButton\">\n        <div class=\"offset-3 col-8\">\n            <a [routerLink]=\"['login']\">\n                Your registration request has been submitted. <br>Click here to navigate to the login page\n            </a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_fb, _router, _storeService, _authenticationService) {
        this._fb = _fb;
        this._router = _router;
        this._storeService = _storeService;
        this._authenticationService = _authenticationService;
        this.userNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.userNameCtrlName = 'userName';
        this.emailCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.emailCtrlName = 'emailCtrlName';
        this.showError = false;
        this.showSubmitButton = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
        this.form.addControl(this.userNameCtrlName, this.userNameCtrl);
        this.form.addControl(this.emailCtrlName, this.emailCtrl);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.form.removeControl(this.userNameCtrlName);
        this.form.removeControl(this.emailCtrlName);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var userName = this.userNameCtrl.value;
        var email = this.emailCtrl.value;
        this._authenticationService.register(userName, email)
            .subscribe(function (result) {
            if (result) {
                _this.showSubmitButton = false;
            }
            else {
                {
                    _this.showError = true;
                }
            }
        }, function (error) {
            _this.showError = true;
            _this.showSubmitButton = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reject/reject.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/reject/reject.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.03);\n    max-width: 800px;\n}\n\nul {\n    list-style: none;\n}\n\n.vl {\n    border-right: 1px solid #ccc;\n}\n\n.btn-link {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWplY3QvcmVqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlamVjdC9yZWplY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDMwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnZsIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYnRuLWxpbmsge1xuICAgIGNvbG9yOmdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/reject/reject.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/reject/reject.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow-lg mt-5 pt-3 pb-3 rounded background\">\n\n    <div class=\"row mt-3\">\n        <div class=\"col-12 text-center\" style=\"font-size: 14px\">Transaction Id: <span style=\"color: blue\"><em>{{transactionId}}</em></span></div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 text-right\">Txn Id:</div>\n        <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"trxIdCtrl\" />\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 text-right\">Reason for Rejection:</div>\n        <div class=\"col-9\">\n            <input type=\"password\" class=\"form-control\" [formControl]=\"reasonCtrl\" />\n        </div>\n    </div>\n\n     <div class=\"row mt-4\" *ngIf=\"showSubmitButton\">\n        <div class=\"offset-4 col-2\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"submit()\">Submit</button>\n        </div>\n    </div>\n\n    <div class=\"row my-5\" *ngIf=\"!showSubmitButton\">\n        <div class=\"offset-3 col-8\">\n            <a [routerLink]=\"['/landingpage']\">Return to dashboard</a>\n        </div>\n    \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/reject/reject.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/reject/reject.component.ts ***!
  \*******************************************************/
/*! exports provided: RejectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectComponent", function() { return RejectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RejectComponent = /** @class */ (function () {
    function RejectComponent(_fb, _router, _storeService, _authenticationService) {
        this._fb = _fb;
        this._router = _router;
        this._storeService = _storeService;
        this._authenticationService = _authenticationService;
        this.trxIdCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.trxIdCtrlName = 'trxIdCtrlName';
        this.reasonCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.reasonCtrlName = 'reasonCtrlName';
        this.showError = false;
        this.showSubmitButton = true;
        this.transactionId = '9999999';
    }
    RejectComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
        this.form.addControl(this.trxIdCtrlName, this.trxIdCtrl);
        this.form.addControl(this.reasonCtrlName, this.reasonCtrl);
    };
    RejectComponent.prototype.ngOnDestroy = function () {
        this.form.removeControl(this.trxIdCtrlName);
        this.form.removeControl(this.reasonCtrlName);
    };
    RejectComponent.prototype.submit = function () {
        var trxid = this.trxIdCtrl.value;
        var reason = this.reasonCtrl.value;
        this.showSubmitButton = false;
    };
    RejectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reject',
            template: __webpack_require__(/*! ./reject.component.html */ "./src/app/components/reject/reject.component.html"),
            styles: [__webpack_require__(/*! ./reject.component.css */ "./src/app/components/reject/reject.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], RejectComponent);
    return RejectComponent;
}());



/***/ }),

/***/ "./src/app/components/request-page/request-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/request-page/request-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.background {\n    background-color:white;\n    max-width: 600px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0LXBhZ2UvcmVxdWVzdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC1wYWdlL3JlcXVlc3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/request-page/request-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/request-page/request-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 pt-3 pb-3 rounded background\" style=\"max-width:900px\">\n  <div class=\"row mt-3\">\n    <div class=\"offset-1 col-2  text-right\">Team Name:</div>\n    <div class=\"col-6\">\n      <input class=\"form-control\" [formControl]=\"teamNameCtrl\" [name]=\"teamNameCtrlName\" [ngClass]=\"{'is-invalid': teamNameCtrl.invalid && teamNameCtrl.dirty}\" />\n    </div>\n  </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"offset-1 col-2 text-right\">Server Name:</div>\n      <div class=\"col-6\">\n        <input class=\"form-control\" [formControl]=\"serverNameCtrl\" [name]=\"serverNameCtrlName\" [ngClass]=\"{'is-invalid': serverNameCtrl.invalid && serverNameCtrl.dirty}\" />\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"offset-1 col-2 text-right\">Service Account:</div>\n      <div class=\"col-6\">\n        <input class=\"form-control\" [formControl]=\"fidCtrl\" [name]=\"fidCtrlName\" [ngClass]=\"{'is-invalid': fidCtrl.invalid && fidCtrl.dirty}\" />\n      </div>\n    </div>\n\n\n  <div class=\"row mt-3 mb-3\">\n    <div class=\"col-3  text-right\">Action To Perform:</div>\n    <div class=\"col-6\">\n      <app-option-filter [formControl]=\"actionCtrl\" [name]=\"actionCtrlName\" (click)=\"getPart2()\" [choices]=\"actionList\"></app-option-filter>\n    </div>\n  </div>\n\n  <div *ngIf=\"showBottomHalf()\" class=\"mt-3\">\n\n    <div *ngFor=\"let ctrl of part2Ctrls; let i = index\" class=\"row mt-3\">\n      <div class=\"col-3 text-right\">{{fileCommandList[i].value}}:</div>\n\n      <div class=\"col-6\">\n        <input class=\"form-control\" [formControl]=\"part2Ctrls[i]\" [name]=\"fileCommandList[i]\" [ngClass]=\"{'is-invalid': part2Ctrls[i].invalid && part2Ctrls[i].dirty}\" />\n      </div>\n\n    </div>\n\n    <div class=\"row mt-3 mb-3\">\n      <div class=\"offset-4 col-6\">\n        <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"submitPart2()\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #modalDialog class=\"modal fade\" let-c=\"close\" let-d=\"dismiss\" role=\"dialog\">\n\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <em class=\"col-12 mt-4 lead\">{{modalMsg}}</em>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onOk()\">OK</button>\n  </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/request-page/request-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/request-page/request-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: RequestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageComponent", function() { return RequestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestPageComponent = /** @class */ (function () {
    function RequestPageComponent(_fb, _router, _modalService, _requestService, _storeService, _listDataService) {
        this._fb = _fb;
        this._router = _router;
        this._modalService = _modalService;
        this._requestService = _requestService;
        this._storeService = _storeService;
        this._listDataService = _listDataService;
        this.modalRef = null;
        this.modalOption = { backdrop: 'static', 'keyboard': false, 'size': 'lg' };
        this.teamNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.actionCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fidCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.serverNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.teamNameCtrlName = 'teamNameCtrl';
        this.actionCtrlName = 'actionCtrl';
        this.fidCtrlName = 'fidCtrlCtrl';
        this.serverNameCtrlName = 'serverNameCtrl';
        this.part2Ctrls = [];
        this.showError = false;
        this.showPart2 = false;
    }
    RequestPageComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
        this.form.addControl(this.teamNameCtrlName, this.teamNameCtrl);
        this.form.addControl(this.actionCtrlName, this.actionCtrl);
        this.user = this._storeService.User;
        this.actionList = this._storeService.ActionListData;
        this.teamNameCtrl.setValue('Team1');
    };
    RequestPageComponent.prototype.getPart2 = function () {
        var _this = this;
        var action = this.actionCtrl.value;
        if (!action) {
            return;
        }
        var selection = this.actionList.find(function (x) { return x.value === action; });
        this._listDataService.getFileCommandList(this.user.userName, selection.value)
            .subscribe(function (result) {
            _this.fileCommandList = result;
            console.log(_this.fileCommandList);
            _this.part2Ctrls = [];
            _this.fileCommandList.forEach(function (cmds) {
                var ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                _this.part2Ctrls.push(ctrl);
                _this.form.addControl(cmds.value, ctrl);
            });
            _this.showPart2 = true;
        }, function (error) {
            console.log(error.msg);
        });
    };
    RequestPageComponent.prototype.submitPart2 = function () {
        var _this = this;
        var values = [];
        this.part2Ctrls.forEach(function (c) {
            values.push(c.value);
        });
        this._requestService.requestAnOperation(this.fidCtrl.value, this.serverNameCtrl.value, this.user.userName, this.actionCtrl.value, this.teamNameCtrl.value, this.fileCommandList, values)
            .subscribe(function (result) {
            console.log(result);
            _this.modalMsg = 'Your request hase been sent, transaction number: ' + result.txnNumber;
            _this.fileCommandList.forEach(function (c) {
                _this.form.removeControl(c.value);
            });
            _this.part2Ctrls = [];
            _this.modalRef = _this._modalService.open(_this.modalDlg, _this.modalOption);
        }, function (error) {
            console.log(error.msg);
            _this.modalMsg = 'Your request encountered an error';
            _this.modalRef = _this._modalService.open(_this.modalDlg, _this.modalOption);
        });
        this.showPart2 = false;
    };
    RequestPageComponent.prototype.onOk = function () {
        this.modalRef.close();
        this._router.navigate(['/landingpage']);
    };
    RequestPageComponent.prototype.showBottomHalf = function () {
        if (this.actionCtrl.value) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalDialog'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RequestPageComponent.prototype, "modalDlg", void 0);
    RequestPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-page',
            template: __webpack_require__(/*! ./request-page.component.html */ "./src/app/components/request-page/request-page.component.html"),
            styles: [__webpack_require__(/*! ./request-page.component.css */ "./src/app/components/request-page/request-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["ListDataService"]])
    ], RequestPageComponent);
    return RequestPageComponent;
}());



/***/ }),

/***/ "./src/app/components/request-status/request-status.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/request-status/request-status.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    right: 0;\n    bottom: 10px;\n    left: 0;\n    z-index: 1030;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.03);\n    max-width: 600px;\n}\n\nul {\n    list-style: none;\n}\n\n.vl {\n    border-right: 1px solid #ccc;\n}\n\n.btn-link {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0LXN0YXR1cy9yZXF1ZXN0LXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osT0FBTztJQUNQLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0LXN0YXR1cy9yZXF1ZXN0LXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMzA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udmwge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5idG4tbGluayB7XG4gICAgY29sb3I6Z3JleTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/request-status/request-status.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-status/request-status.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow-lg mt-5 pt-3 pb-3 rounded background\">\n\n    <div class=\"row mt-3\">\n        <ol>\n            <li>Your requested has been submitted {{transactionId}}</li>\n            <li>A email has been sent to the approver</li>\n            <li>You will be notified once they approve it and task runs.</li>\n        </ol>\n    </div>\n\n    <div class=\"row my-5\">\n        <div class=\"offset-3 col-8\">\n            <a [routerLink]=\"['/landingpage']\">Return to dashboard</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request-status/request-status.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-status/request-status.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatusComponent", function() { return RequestStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestStatusComponent = /** @class */ (function () {
    function RequestStatusComponent(_fb, _router, _storeService, _authenticationService) {
        this._fb = _fb;
        this._router = _router;
        this._storeService = _storeService;
        this._authenticationService = _authenticationService;
        this.showError = false;
        this.showSubmitButton = true;
        this.transactionId = '9999999';
    }
    RequestStatusComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({});
    };
    RequestStatusComponent.prototype.ngOnDestroy = function () {
    };
    RequestStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-status',
            template: __webpack_require__(/*! ./request-status.component.html */ "./src/app/components/request-status/request-status.component.html"),
            styles: [__webpack_require__(/*! ./request-status.component.css */ "./src/app/components/request-status/request-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], RequestStatusComponent);
    return RequestStatusComponent;
}());



/***/ }),

/***/ "./src/app/custom-controls/option-filter/option-filter.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/custom-controls/option-filter/option-filter.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style: none;\n}\n\nul.dropdown-menu-form {\n\tpadding: 5px 10px 0;\n\toverflow-y: auto;\n    height: 500px;\n}\n\n/* Button Styling */\n\n.btn-outline-default {\n    border-color: lightgray;\n}\n\n.btn-outline-default:hover {\n    background-color: lightgray\n}\n\n.btn-outline-default:active,\n.btn-outline-default.active,\n.open > .btn-outline-default.dropdown-toggle {\n    background-color: lightgray;\n}\n\n.btn-outline-default:active:hover,\n.btn-outline-default:active:focus,\n.btn-outline-default:active.focus,\n.btn-outline-default.active:hover,\n.btn-outline-default.active:focus,\n.btn-outline-default.active.focus,\n.open > .btn-outline-default.dropdown-toggle:hover,\n.open > .btn-outline-default.dropdown-toggle:focus,\n.open > .btn-outline-default.dropdown-toggle.focus {\n    background-color: lightgray;\n}\n\n.btn-outline-primary.disabled:focus,\n.btn-outline-primary.disabled.focus,\n.btn-outline-primary:disabled:focus,\n.btn-outline-primary:disabled.focus {\n  background-color: lightgray;\n  border-color: lightgray;\n}\n\n.btn-outline-primary.disabled:hover,\n.btn-outline-primary:disabled:hover {\n  background-color: lightgray;\n  border-color: lightgray;\n}\n\n.option-box {\n    padding: 0; \n    height: 39px !important;\n}\n\nspan.limit-ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.filter-btn {\n    position: relative;\n    height: 34px;\n}\n\n.filtered-btn a span {\n    display: block;\n    overflow: hidden;\n    margin-right: 10px;\n}\n\n.dropdown-item-list {\n    padding: 2px 4px;\n    margin: 2px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbnRyb2xzL29wdGlvbi1maWx0ZXIvb3B0aW9uLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGdCQUFnQjtJQUNiLGFBQWE7QUFDakI7O0FBRUEsbUJBQW1COztBQUNuQjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7OztJQUdJLDJCQUEyQjtBQUMvQjs7QUFFQTs7Ozs7Ozs7O0lBU0ksMkJBQTJCO0FBQy9COztBQUVBOzs7O0VBSUUsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFDQTs7RUFFRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLWNvbnRyb2xzL29wdGlvbi1maWx0ZXIvb3B0aW9uLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUtZm9ybSB7XG5cdHBhZGRpbmc6IDVweCAxMHB4IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLyogQnV0dG9uIFN0eWxpbmcgKi9cbi5idG4tb3V0bGluZS1kZWZhdWx0IHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRlZmF1bHQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheVxufVxuXG4uYnRuLW91dGxpbmUtZGVmYXVsdDphY3RpdmUsXG4uYnRuLW91dGxpbmUtZGVmYXVsdC5hY3RpdmUsXG4ub3BlbiA+IC5idG4tb3V0bGluZS1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uYnRuLW91dGxpbmUtZGVmYXVsdDphY3RpdmU6aG92ZXIsXG4uYnRuLW91dGxpbmUtZGVmYXVsdDphY3RpdmU6Zm9jdXMsXG4uYnRuLW91dGxpbmUtZGVmYXVsdDphY3RpdmUuZm9jdXMsXG4uYnRuLW91dGxpbmUtZGVmYXVsdC5hY3RpdmU6aG92ZXIsXG4uYnRuLW91dGxpbmUtZGVmYXVsdC5hY3RpdmU6Zm9jdXMsXG4uYnRuLW91dGxpbmUtZGVmYXVsdC5hY3RpdmUuZm9jdXMsXG4ub3BlbiA+IC5idG4tb3V0bGluZS1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZTpob3Zlcixcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxuLm9wZW4gPiAuYnRuLW91dGxpbmUtZGVmYXVsdC5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQ6Zm9jdXMsXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5kaXNhYmxlZC5mb2N1cyxcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkOmZvY3VzLFxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6ZGlzYWJsZWQuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpkaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5vcHRpb24tYm94IHtcbiAgICBwYWRkaW5nOiAwOyBcbiAgICBoZWlnaHQ6IDM5cHggIWltcG9ydGFudDtcbn1cblxuc3Bhbi5saW1pdC1lbGxpcHNpcyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMzRweDtcbn1cblxuLmZpbHRlcmVkLWJ0biBhIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZHJvcGRvd24taXRlbS1saXN0IHtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgIG1hcmdpbjogMnB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/custom-controls/option-filter/option-filter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/custom-controls/option-filter/option-filter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control option-box\" [ngClass]=\"{'is-invalid': formControl.invalid && formControl.dirty}\" >\n    <div ngbDropdown class=\"filter-btn\">\n        <a class=\"form-control btn\" ngbDropdownToggle ngClass=\"readOnly\">\n            <span class=\"limit-ellipses\" ngClass=\"text-muted\">\n                {{ selection || \"Select Option\" }}\n            </span>\n        </a>\n        <ul ngbDropdownMenu class=\"form-control dropdown-menu-form\" collapse=\"isCollapsed\">\n            <li>\n                <input \n                    [formControl]=\"searchCtrl\" \n                    class=\"form-control\" \n                    type=\"text\" \n                    placeholder=\"Search\" \n                    (click)=\"$event.stopPropagation()\">\n            </li>\n            <div class=\"dropdown-divider\"></div>\n            <li \n                class=\"dropdown-item dropdown-item-list\" \n                *ngFor=\"let reason of filteredReasons\" \n                (click)=\"onChange(reason);\" >\n                {{reason.value}}\n            </li>\n            \n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/custom-controls/option-filter/option-filter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-controls/option-filter/option-filter.component.ts ***!
  \**************************************************************************/
/*! exports provided: OptionFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionFilterComponent", function() { return OptionFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/custom-validators */ "./src/app/validators/custom-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptionFilterComponent = /** @class */ (function () {
    function OptionFilterComponent() {
        this.key = '';
        this.readOnly = false;
        this.required = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.dropDownCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.selection = '';
        this.propagateChange = function (_) { };
    }
    OptionFilterComponent_1 = OptionFilterComponent;
    OptionFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.name === undefined) {
            console.error('Name must must be specified in option filter');
        }
        this.searchCtrlName = this.name + 'Search';
        this.dropDownCtrlName = this.name + 'Option';
        this.parentForm = this.formControl.parent;
        this.parentForm.addControl(this.searchCtrlName, this.searchCtrl);
        this.parentForm.addControl(this.dropDownCtrlName, this.dropDownCtrl);
        if (this.key) {
            var select = this.choices.find(function (x) { return x.key === _this.key; });
            this.selection = select.value;
        }
        if (this.required) {
            this.formControl.setValidators([_validators_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].requiredDropDownValidator]);
        }
        this.filteredReasons = this.choices;
        // subscribe to changes to filter value
        this.filterSubscription = this.searchCtrl.valueChanges.subscribe(function (value) {
            // filter reasons based on value
            if (!value) {
                _this.filteredReasons = _this.choices;
                return;
            }
            var valueRegex = new RegExp(value, 'i');
            _this.filteredReasons = _this.choices.filter(function (reason) {
                return valueRegex.test(reason.value);
            });
        });
    };
    OptionFilterComponent.prototype.ngOnDestroy = function () {
        this.filterSubscription.unsubscribe();
        this.parentForm.removeControl(this.searchCtrlName);
        this.parentForm.removeControl(this.dropDownCtrlName);
    };
    OptionFilterComponent.prototype.onChange = function (selection) {
        this.selection = selection.value;
        this.formControl.setValue(selection.value);
    };
    OptionFilterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.choices === undefined) {
            return;
        }
        var choices = changes.choices;
        if (choices.currentValue === undefined || choices.currentValue === undefined) {
            return;
        }
        this.choices = choices.currentValue;
        this.filteredReasons = this.choices;
    };
    // From ControlValueAccessor interface ------------------------------------
    OptionFilterComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.key = obj;
        }
    };
    OptionFilterComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    OptionFilterComponent.prototype.registerOnTouched = function () {
    };
    var OptionFilterComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionFilterComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OptionFilterComponent.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OptionFilterComponent.prototype, "choices", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], OptionFilterComponent.prototype, "formControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OptionFilterComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OptionFilterComponent.prototype, "required", void 0);
    OptionFilterComponent = OptionFilterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-option-filter',
            template: __webpack_require__(/*! ./option-filter.component.html */ "./src/app/custom-controls/option-filter/option-filter.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OptionFilterComponent_1; }),
                    multi: true,
                }
            ],
            styles: [__webpack_require__(/*! ./option-filter.component.css */ "./src/app/custom-controls/option-filter/option-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionFilterComponent);
    return OptionFilterComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: User, ListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/models/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _list_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-data.model */ "./src/app/models/list-data.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListData", function() { return _list_data_model__WEBPACK_IMPORTED_MODULE_1__["ListData"]; });





/***/ }),

/***/ "./src/app/models/list-data.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/list-data.model.ts ***!
  \*******************************************/
/*! exports provided: ListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListData", function() { return ListData; });
var ListData = /** @class */ (function () {
    function ListData(_value, _key) {
        this.key = _key;
        this.value = _value;
    }
    return ListData;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_userName, _firstName, _middleName, _lastName, _emailAddress) {
        this.userName = _userName;
        this.firstName = _firstName;
        this.middleName = _middleName;
        this.lastName = _lastName;
        this.emailAddress = _emailAddress;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./src/app/utilities/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_httpClient) {
        this._httpClient = _httpClient;
    }
    AuthenticationService.prototype.authenticate = function (userId, password) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'authenticate';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('password', password).set('userid', userId);
        var headers = _utilities__WEBPACK_IMPORTED_MODULE_3__["MiscUtilities"].createHeadersJson();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    AuthenticationService.prototype.register = function (userName, email) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'register';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('name', userName).set('email', email);
        var headers = _utilities__WEBPACK_IMPORTED_MODULE_3__["MiscUtilities"].createHeadersJson();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthenticationService, ListDataService, RequestService, StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _list_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-data.service */ "./src/app/services/list-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDataService", function() { return _list_data_service__WEBPACK_IMPORTED_MODULE_1__["ListDataService"]; });

/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request.service */ "./src/app/services/request.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]; });

/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]; });







/***/ }),

/***/ "./src/app/services/list-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/list-data.service.ts ***!
  \***********************************************/
/*! exports provided: ListDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataService", function() { return ListDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./src/app/utilities/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListDataService = /** @class */ (function () {
    function ListDataService(_httpClient) {
        this._httpClient = _httpClient;
    }
    ListDataService.prototype.getCommandList = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'commandList';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('name', 'none');
        var headers = _utilities__WEBPACK_IMPORTED_MODULE_3__["MiscUtilities"].createHeadersJson();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    ListDataService.prototype.getFileCommandList = function (requestor, action) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'form';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('action', action) // 'SCP File from your server to destination')
            .set('requestor', requestor)
            .set('team', 'Big');
        var headers = _utilities__WEBPACK_IMPORTED_MODULE_3__["MiscUtilities"].createHeadersJson();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    ListDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListDataService);
    return ListDataService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./src/app/utilities/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(_httpClient) {
        this._httpClient = _httpClient;
    }
    RequestService.prototype.requestAnOperation = function (fid, serverName, requestor, action, team, paramNames, paramValues) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'RequestAnOperation';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params
            .append('fid', fid)
            .append('server', serverName)
            .append('requestor', requestor)
            .append('action', action)
            .append('team', team);
        var idx = 0;
        paramNames.forEach(function (n) {
            params = params.append(n.value, paramValues[idx++]);
        });
        var headers = _utilities__WEBPACK_IMPORTED_MODULE_3__["MiscUtilities"].createHeadersJson();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    RequestService.prototype.performAnOperation = function (txnNumber, userName, password, type, token) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'PerformOperation';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params
            .append('txnNumber', txnNumber)
            .append('userName', userName)
            .append('password', password)
            .append('type', type)
            .append('token', token);
        var headers = _utilities__WEBPACK_IMPORTED_MODULE_3__["MiscUtilities"].createHeadersJson();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StoreService = /** @class */ (function () {
    function StoreService() {
        // Store master data
        this.user = null;
        this.actionList = [];
    }
    Object.defineProperty(StoreService.prototype, "User", {
        get: function () {
            return this.user;
        },
        set: function (user) {
            this.user = user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreService.prototype, "ActionListData", {
        get: function () {
            return this.actionList;
        },
        set: function (commands) {
            this.actionList = commands;
        },
        enumerable: true,
        configurable: true
    });
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/utilities/index.ts":
/*!************************************!*\
  !*** ./src/app/utilities/index.ts ***!
  \************************************/
/*! exports provided: MiscUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _misc_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc-utilities */ "./src/app/utilities/misc-utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiscUtilities", function() { return _misc_utilities__WEBPACK_IMPORTED_MODULE_0__["MiscUtilities"]; });




/***/ }),

/***/ "./src/app/utilities/misc-utilities.ts":
/*!*********************************************!*\
  !*** ./src/app/utilities/misc-utilities.ts ***!
  \*********************************************/
/*! exports provided: MiscUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscUtilities", function() { return MiscUtilities; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var MiscUtilities = /** @class */ (function () {
    function MiscUtilities() {
    }
    MiscUtilities.getParameterByName = function (name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    MiscUtilities.createHeadersJson = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](__assign({ 'Content-Type': 'application/json' }, overrides));
    };
    MiscUtilities.createHeadersText = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](__assign({ 'Content-Type': 'application/json', 'Accept': 'text/html' }, overrides));
    };
    MiscUtilities.formatPhone = function (value) {
        if (!value || value.length !== 10) {
            return value;
        }
        return value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6, 10);
    };
    MiscUtilities.padNumber = function (value) {
        if (MiscUtilities.isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    };
    MiscUtilities.isNumber = function (value) {
        return !isNaN(MiscUtilities.toInteger(value));
    };
    MiscUtilities.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    MiscUtilities.isString = function (value) {
        return typeof value === 'string';
    };
    MiscUtilities.getDateFromNgbDate = function (value) {
        if (value === null || value === undefined || value.month === 0) {
            return '';
        }
        var result = this.padNumber(value.month) + '/' +
            this.padNumber(value.day) + '/' +
            value.year;
        return result;
    };
    return MiscUtilities;
}());



/***/ }),

/***/ "./src/app/validators/custom-validators.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/custom-validators.ts ***!
  \*************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
// import * as momentImported from 'moment';
// const moment = momentImported;
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': function () { return 'Field is required'; },
            'invalidCreditCard': function () { return 'Is invalid credit card number'; },
            'invalidEmailAddress': function () { return 'Invalid email address'; },
            'invalidPassword': function () { return 'Invalid password. Password must be at least 6 characters long, and contain a number.'; },
            'invalidPhoneNumber': function () { return 'Please enter phone in valid format xxx-xxx-xxxx'; },
            'invalidYear': function () { return 'Please enter year between 1920-2017'; },
            'invalidDate': function () { return 'Please enter a valid date'; },
            'invalidTime': function () { return 'Please enter a valid time'; },
            'invalidZipCode': function () { return 'Please enter a valid zipcode'; },
            'invalidSSN': function () { return 'Please enter valid Social Security Number with out any space or dash'; },
            'maxlength': function () { return "Maxmium length " + validatorValue.requiredLength; },
            'invalidDropDown': function () { return "Make a selection"; },
            'invalidRadioButton': function () { return 'Make a selection'; },
            'invalidNgbdDate': function () { return 'Enter Date'; },
            'invalidNgbdTime': function () { return 'Enter Time'; },
            'invalidRadio': function () { return 'Make a selection'; }
        };
        return config[validatorName];
    };
    CustomValidators.markAllControlsAsTouchedAndDirty = function (formGroup) {
        Object.keys(formGroup.controls).forEach(function (key) {
            formGroup.get(key).markAsTouched();
            formGroup.get(key).markAsDirty();
        });
    };
    CustomValidators.validateAllControls = function (formGroup) {
        Object.keys(formGroup.controls).forEach(function (key) {
            formGroup.get(key).updateValueAndValidity();
        });
    };
    CustomValidators.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    CustomValidators.emailValidator = function (control) {
        if (control.pristine || control.value === null) {
            return null;
        }
        if (control.value.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) {
            return null;
        }
        return { 'invalidEmailAddress': true };
    };
    CustomValidators.phoneValidator = function (control) {
        if (control.pristine || control.value === null) {
            return null;
        }
        if (CustomValidators.badTelephoneNumbers.findIndex(function (y) { return y === control.value; }) >= 0) {
            return { 'invalidPhoneNumber': true };
        }
        if (control.value.match('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')) {
            return null;
        }
        return { 'invalidPhoneNumber': true };
    };
    CustomValidators.phoneAllValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
            return null;
        }
        else {
            return { 'invalidPhoneNumber': true };
        }
    };
    CustomValidators.zipValidator = function (control) {
        // RFC 2822 compliant regex
        var postalCode = '';
        if (control.value) {
            postalCode = control.value.replace(/[_\s]/g, '');
        }
        if (postalCode.match(/(^\d{5}-$)|(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
            return null;
        }
        else {
            return { 'invalidZipCode': true };
        }
    };
    CustomValidators.yearValidator = function (control) {
        // Check for dates between 1920-2039
        if (control.value.match(/^(19[2-9]\d|20[0-3][0-9])$/)) {
            return null;
        }
        else {
            return { 'invalidYear': true };
        }
    };
    /*  static dateValidator(control: FormControl) {
          if (typeof control.value !== 'string') {
              return null;
          }
  
          if (moment(control.value, 'MM/DD/YYYY', true).isValid()) {
              return null;
          } else {
              return { 'invalidDate': true };
          }
      }
  
      static timeValidator(control: FormControl) {
  
          if (moment(control.value, 'hh:mm').isValid()) {
              return null;
          } else {
              return { 'invalidTime': true };
          }
      } */
    CustomValidators.ssnValidator = function (control) {
        // RFC 2822 compliant regex
        // Contain all zeroes in any specific group (ie 000-##-####, ###-00-####, or ###-##-0000)
        // Begin with ’666′.
        // Begin with any value from ’900-999′
        // Be ’078-05-1120′ (due to the Woolworth’s Wallet Fiasco)
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?!\b(\d)\1+-(\d)\1+-(\d)\1+\b)(?!123-45-6789|219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/)) {
            return null;
        }
        else {
            return { 'invalidSSN': true };
        }
    };
    CustomValidators.passwordValidator = function (control) {
        // {6,10}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,10}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    /* static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): { [key: string]: any } => {
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return { mismatchedPasswords: true };
            } else {
                return null;
            }
        };
    } */
    CustomValidators.requiredDropDownValidator = function (control) {
        if (control.value === '-1' || control.value === '' || control.value === null) {
            return { 'invalidDropDown': true };
        }
        else {
            return null;
        }
    };
    CustomValidators.requiredNgbdDatePicker = function (control) {
        if (control.value === null) {
            return { 'invalidNgbdDate': true };
        }
        else {
            return null;
        }
    };
    CustomValidators.requiredNgbdTimePicker = function (control) {
        if (control.value === null) {
            return { 'invalidNgbdTime': true };
        }
        else {
            return null;
        }
    };
    CustomValidators.radioButtonValidator = function (control) {
        if (control.value === null) {
            return { 'invalidRadio': true };
        }
        else {
            return null;
        }
    };
    CustomValidators.badTelephoneNumbers = [
        '123-456-7890',
        '012-345-6789',
        '111-111-1111',
        '222-222-2222',
        '333-333-3333',
        '444-444-4444',
        '555-555-5555',
        '666-666-6666',
        '777-777-7777',
        '888-888-8888',
        '999-999-9999'
    ];
    return CustomValidators;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    coatApiUrl: 'http://localhost:8090/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sunny\eclipse-workspace\coat3ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map