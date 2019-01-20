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
/* harmony import */ var _components_request_page_request_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request-page/request-page.component */ "./src/app/components/request-page/request-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _components__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'landingpage', component: _components__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'requestpage', component: _components_request_page_request_page_component__WEBPACK_IMPORTED_MODULE_3__["RequestPageComponent"] },
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

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

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
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listDataService.getCommandList()
            .subscribe(function (result) {
            _this._storeService.ActionListData = result;
            _this._router.navigate(['/login']);
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
/* harmony import */ var _components_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/registration-page/registration-page.component */ "./src/app/components/registration-page/registration-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RequestPageComponent"],
                _custom_controls_option_filter_option_filter_component__WEBPACK_IMPORTED_MODULE_9__["OptionFilterComponent"],
                _components_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_10__["StoreService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["ListDataService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["RequestService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
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

module.exports = ".lg-image {\r\n    height: 90px;\r\n    width: 90px;\r\n}\r\n\r\n.sm-image {\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n.footer {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 10px;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGctaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5zbS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"text-center\" style=\"font-size: x-large\">\r\n        Dashboard\r\n    </div>\r\n</div>"

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

module.exports = ".header {\r\n    background-color: #343a40;\r\n    color: #fff;\r\n    max-height: 12%;\r\n  }\r\n\r\n.row {\r\n    align-items: center;\r\n}\r\n\r\n.logos  {\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-grow: 1;\r\n}\r\n\r\n.icon-home {\r\n    border-right: 1px solid rgba(0,0,0,.2);\r\n}\r\n\r\n.icon-home i {\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.coats-logo {\r\n    height: 12%;\r\n    width: 12%;\r\n\r\n}\r\n\r\nimg {\r\n    color: #007bff!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtHQUNqQjs7QUFFSDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHVDQUF1QztDQUMxQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osV0FBVzs7Q0FFZDs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMiU7XHJcbiAgfVxyXG5cclxuLnJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nb3MgIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5pY29uLWhvbWUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuXHJcbi5pY29uLWhvbWUgaSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4uY29hdHMtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIHdpZHRoOiAxMiU7XHJcblxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm header\">\r\n    <div class=\"row d-flex\">\r\n        <div class=\"ml-3\">Safely\r\n            <span class=\"logos\">\r\n                <img class=\"navImage coats-logo\" src=\"assets/images/target.svg\">\r\n            </span>\r\n            Ops\r\n        </div>\r\n    </div>\r\n\r\n</nav>"

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
/*! exports provided: RequestPageComponent, DashboardComponent, HeaderComponent, LoginComponent, LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });

/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]; });

/* harmony import */ var _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-page/request-page.component */ "./src/app/components/request-page/request-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestPageComponent", function() { return _request_page_request_page_component__WEBPACK_IMPORTED_MODULE_4__["RequestPageComponent"]; });








/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-dark {\r\n    color: var(--darkBlue);\r\n}\r\n\r\n.landing-page-btn {\r\n    background-color: var(--medBlue)\r\n}\r\n\r\n.lg-image {\r\n    height: 90px;\r\n    width: 90px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1kYXJrIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kYXJrQmx1ZSk7XHJcbn1cclxuXHJcbi5sYW5kaW5nLXBhZ2UtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZEJsdWUpXHJcbn1cclxuXHJcbi5sZy1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"mt-3 row\">\r\n        <div class=\"col-2 text-dark\">Reports</div>\r\n        <div class=\"offset-3 col-2 text-dark\">Activities</div>\r\n    </div>\r\n\r\n    <div class=\"mt-2 row\">\r\n        <div class=\" col-2 text-dark\">\r\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\">\r\n                <img src=\"assets/images/Graph.svg\" class=\"lg-image\"><br>\r\n                <div class=\"text-white text-center\">Dashboard</div>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-2 text-dark\">\r\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\">\r\n                <img src=\"assets/images/History.svg\" class=\"lg-image\"><br>\r\n                <div class=\"text-white text-center\">History</div>\r\n            </button>\r\n        </div>\r\n        <div class=\"offset-1 col-2 text-dark\">\r\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\">\r\n                <img src=\"assets/images/Search.svg\" class=\"lg-image\"><br>\r\n                <div class=\"text-white text-center\">Advanced Search</div>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-2 text-dark\">\r\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\">\r\n                <img src=\"assets/images/Head.svg\" class=\"lg-image\"><br>\r\n                <div class=\"text-white text-center\">Profile</div>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mt-2 row\">\r\n\r\n        <div class=\" col-2 text-dark\">\r\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\" (click)=\"routeToRequest()\">\r\n                <img src=\"assets/images/PlusSign.svg\" class=\"lg-image\"><br>\r\n                <div class=\"text-white text-center\">Request</div>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-2 text-dark\">\r\n            <button class=\"btn shadow-lg landing-page-btn rounded btn-block\">\r\n                <img src=\"assets/images/CheckMark.svg\" class=\"lg-image\"><br>\r\n                <div class=\"text-white text-center\">Approve</div>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

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
    function LandingPageComponent(_router) {
        this._router = _router;
    }
    LandingPageComponent.prototype.routeToRequest = function () {
        this._router.navigate(['/requestpage']);
    };
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.ngOnDestroy = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = ".footer {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 10px;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n.background {\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    max-width: 600px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n.vl {\r\n    border-right: 1px solid #ccc;\r\n}\r\n\r\n.btn-link {\r\n    color:grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnZsIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgICBjb2xvcjpncmV5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow-lg mt-5 pt-3 pb-3 rounded background\">\r\n\r\n    <div class=\"row mt-5\">\r\n        <div style=\"float: none; margin: 0 auto;\">\r\n            <input class=\"form-control\" [formControl]=\"userNameCtrl\" placeholder=\"Username\" [ngClass]=\"{'is-invalid': userNameCtrl.invalid && userNameCtrl.dirty}\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n        <div style=\"float: none; margin: 0 auto;\">\r\n            <input type=\"password\" class=\"form-control\" [formControl]=\"passWordCtrl\" placeholder=\"Password\" [ngClass]=\"{'is-invalid': passWordCtrl.invalid && passWordCtrl.dirty}\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n        <div style=\"float: none; margin: 0 auto;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"login()\">Login</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"showError\" class=\"row mt-5\">\r\n        <div style=\"float: none; margin: 0 auto;\" class=\"text-danger\">UserId and/or password is not correct</div>\r\n    </div>\r\n\r\n    <div class=\"text-center mb-2\">Forgot Password? Reset</div>\r\n    <div class=\"text-center mb-2\">New User? Register</div>\r\n</div>"

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

/***/ "./src/app/components/registration-page/registration-page.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/registration-page/registration-page.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/registration-page/registration-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/registration-page/registration-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  registration-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/registration-page/registration-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/registration-page/registration-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
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

var RegistrationPageComponent = /** @class */ (function () {
    function RegistrationPageComponent() {
    }
    RegistrationPageComponent.prototype.ngOnInit = function () {
    };
    RegistrationPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-page',
            template: __webpack_require__(/*! ./registration-page.component.html */ "./src/app/components/registration-page/registration-page.component.html"),
            styles: [__webpack_require__(/*! ./registration-page.component.css */ "./src/app/components/registration-page/registration-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationPageComponent);
    return RegistrationPageComponent;
}());



/***/ }),

/***/ "./src/app/components/request-page/request-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/request-page/request-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.background {\r\n    background-color:white;\r\n    max-width: 600px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0LXBhZ2UvcmVxdWVzdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC1wYWdlL3JlcXVlc3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/request-page/request-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/request-page/request-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 pt-3 pb-3 rounded background\" style=\"max-width:900px\">\r\n  <div class=\"row mt-3\">\r\n    <div class=\"offset-1 col-2  text-right\">Team Name:</div>\r\n    <div class=\"col-6\">\r\n      <input class=\"form-control\" [formControl]=\"teamNameCtrl\" [name]=\"teamNameCtrlName\" [ngClass]=\"{'is-invalid': teamNameCtrl.invalid && teamNameCtrl.dirty}\" />\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"row mt-2\">\r\n      <div class=\"offset-1 col-2 text-right\">Server Name:</div>\r\n      <div class=\"col-6\">\r\n        <input class=\"form-control\" [formControl]=\"serverNameCtrl\" [name]=\"serverNameCtrlName\" [ngClass]=\"{'is-invalid': serverNameCtrl.invalid && serverNameCtrl.dirty}\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-2\">\r\n      <div class=\"offset-1 col-2 text-right\">Service Account:</div>\r\n      <div class=\"col-6\">\r\n        <input class=\"form-control\" [formControl]=\"fidCtrl\" [name]=\"fidCtrlName\" [ngClass]=\"{'is-invalid': fidCtrl.invalid && fidCtrl.dirty}\" />\r\n      </div>\r\n    </div>\r\n\r\n\r\n  <div class=\"row mt-2 mb-3\">\r\n    <div class=\"offset-1 col-2  text-right\">Action To Perform:</div>\r\n    <div class=\"col-6\">\r\n      <app-option-filter [formControl]=\"actionCtrl\" [name]=\"actionCtrlName\" (click)=\"getPart2()\" [choices]=\"actionList\"></app-option-filter>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"showBottomHalf()\" class=\"mt-3\">\r\n\r\n    <div *ngFor=\"let ctrl of part2Ctrls; let i = index\" class=\"row mt-2\">\r\n      <div class=\"offset-1 col-2  text-right\">{{fileCommandList[i].value}}:</div>\r\n\r\n      <div class=\"col-6\">\r\n        <input class=\"form-control\" [formControl]=\"part2Ctrls[i]\" [name]=\"fileCommandList[i]\" [ngClass]=\"{'is-invalid': part2Ctrls[i].invalid && part2Ctrls[i].dirty}\" />\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row mt-3 mb-3\">\r\n      <div class=\"offset-4 col-6\">\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px\" (click)=\"submitPart2()\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #modalDialog class=\"modal fade\" let-c=\"close\" let-d=\"dismiss\" role=\"dialog\">\r\n\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <em class=\"col-12 mt-4 lead\">{{modalMsg}}</em>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onOk()\">OK</button>\r\n  </div>\r\n\r\n</ng-template>"

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

/***/ "./src/app/custom-controls/option-filter/option-filter.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/custom-controls/option-filter/option-filter.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style: none;\r\n}\r\n\r\nul.dropdown-menu-form {\r\n\tpadding: 5px 10px 0;\r\n\toverflow-y: auto;\r\n    height: 500px;\r\n}\r\n\r\n/* Button Styling */\r\n\r\n.btn-outline-default {\r\n    border-color: lightgray;\r\n}\r\n\r\n.btn-outline-default:hover {\r\n    background-color: lightgray\r\n}\r\n\r\n.btn-outline-default:active,\r\n.btn-outline-default.active,\r\n.open > .btn-outline-default.dropdown-toggle {\r\n    background-color: lightgray;\r\n}\r\n\r\n.btn-outline-default:active:hover,\r\n.btn-outline-default:active:focus,\r\n.btn-outline-default:active.focus,\r\n.btn-outline-default.active:hover,\r\n.btn-outline-default.active:focus,\r\n.btn-outline-default.active.focus,\r\n.open > .btn-outline-default.dropdown-toggle:hover,\r\n.open > .btn-outline-default.dropdown-toggle:focus,\r\n.open > .btn-outline-default.dropdown-toggle.focus {\r\n    background-color: lightgray;\r\n}\r\n\r\n.btn-outline-primary.disabled:focus,\r\n.btn-outline-primary.disabled.focus,\r\n.btn-outline-primary:disabled:focus,\r\n.btn-outline-primary:disabled.focus {\r\n  background-color: lightgray;\r\n  border-color: lightgray;\r\n}\r\n\r\n.btn-outline-primary.disabled:hover,\r\n.btn-outline-primary:disabled:hover {\r\n  background-color: lightgray;\r\n  border-color: lightgray;\r\n}\r\n\r\n.option-box {\r\n    padding: 0; \r\n    height: 39px !important;\r\n}\r\n\r\nspan.limit-ellipsis {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.filter-btn {\r\n    position: relative;\r\n    height: 34px;\r\n}\r\n\r\n.filtered-btn a span {\r\n    display: block;\r\n    overflow: hidden;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dropdown-item-list {\r\n    padding: 2px 4px;\r\n    margin: 2px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbnRyb2xzL29wdGlvbi1maWx0ZXIvb3B0aW9uLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGlCQUFpQjtJQUNkLGNBQWM7Q0FDakI7O0FBRUQsb0JBQW9COztBQUNwQjtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLDJCQUEyQjtDQUM5Qjs7QUFFRDs7O0lBR0ksNEJBQTRCO0NBQy9COztBQUVEOzs7Ozs7Ozs7SUFTSSw0QkFBNEI7Q0FDL0I7O0FBRUQ7Ozs7RUFJRSw0QkFBNEI7RUFDNUIsd0JBQXdCO0NBQ3pCOztBQUNEOztFQUVFLDRCQUE0QjtFQUM1Qix3QkFBd0I7Q0FDekI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0NBQzNCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29udHJvbHMvb3B0aW9uLWZpbHRlci9vcHRpb24tZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bC5kcm9wZG93bi1tZW51LWZvcm0ge1xyXG5cdHBhZGRpbmc6IDVweCAxMHB4IDA7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBTdHlsaW5nICovXHJcbi5idG4tb3V0bGluZS1kZWZhdWx0IHtcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGVmYXVsdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXlcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRlZmF1bHQ6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtZGVmYXVsdC5hY3RpdmUsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRlZmF1bHQ6YWN0aXZlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtZGVmYXVsdDphY3RpdmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1kZWZhdWx0OmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1vdXRsaW5lLWRlZmF1bHQuYWN0aXZlOmhvdmVyLFxyXG4uYnRuLW91dGxpbmUtZGVmYXVsdC5hY3RpdmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1kZWZhdWx0LmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4gPiAuYnRuLW91dGxpbmUtZGVmYXVsdC5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5vcGVuID4gLmJ0bi1vdXRsaW5lLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3BlbiA+IC5idG4tb3V0bGluZS1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5LmRpc2FibGVkOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5kaXNhYmxlZC5mb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5vcHRpb24tYm94IHtcclxuICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgaGVpZ2h0OiAzOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNwYW4ubGltaXQtZWxsaXBzaXMge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uZmlsdGVyZWQtYnRuIGEgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/custom-controls/option-filter/option-filter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/custom-controls/option-filter/option-filter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control option-box\" [ngClass]=\"{'is-invalid': formControl.invalid && formControl.dirty}\" >\r\n    <div ngbDropdown class=\"filter-btn\">\r\n        <a class=\"form-control btn\" ngbDropdownToggle ngClass=\"readOnly\">\r\n            <span class=\"limit-ellipses\" ngClass=\"text-muted\">\r\n                {{ selection || \"Select Option\" }}\r\n            </span>\r\n        </a>\r\n        <ul ngbDropdownMenu class=\"form-control dropdown-menu-form\" collapse=\"isCollapsed\">\r\n            <li>\r\n                <input \r\n                    [formControl]=\"searchCtrl\" \r\n                    class=\"form-control\" \r\n                    type=\"text\" \r\n                    placeholder=\"Search\" \r\n                    (click)=\"$event.stopPropagation()\">\r\n            </li>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <li \r\n                class=\"dropdown-item dropdown-item-list\" \r\n                *ngFor=\"let reason of filteredReasons\" \r\n                (click)=\"onChange(reason);\" >\r\n                {{reason.value}}\r\n            </li>\r\n            \r\n        </ul>\r\n    </div>\r\n</div>"

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
            styles: [__webpack_require__(/*! ./option-filter.component.css */ "./src/app/custom-controls/option-filter/option-filter.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OptionFilterComponent_1; }),
                    multi: true,
                }
            ]
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
        var headers = this.createHeaders();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    /* ----------------Private methods------------------*/
    AuthenticationService.prototype.createHeaders = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](__assign({ 'Content-Type': 'application/json' }, overrides));
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
        var headers = this.createHeaders();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    ListDataService.prototype.getFileCommandList = function (requestor, action) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].coatApiUrl + 'form';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('action', action) // 'SCP File from your server to destination')
            .set('requestor', requestor)
            .set('team', 'Big');
        var headers = this.createHeaders();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    /* ----------------Private methods------------------*/
    ListDataService.prototype.createHeaders = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](__assign({ 'Content-Type': 'application/json' }, overrides));
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
        var headers = this.createHeaders();
        return this._httpClient
            .get(url, { headers: headers, params: params });
    };
    /* ----------------Private methods------------------*/
    RequestService.prototype.createHeaders = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](__assign({ 'Content-Type': 'application/json' }, overrides));
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