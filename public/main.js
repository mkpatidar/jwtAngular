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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _components_layouts_homelayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layouts/homelayout.component */ "./src/app/components/layouts/homelayout.component.ts");
/* harmony import */ var _components_layouts_loginlayout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layouts/loginlayout.component */ "./src/app/components/layouts/loginlayout.component.ts");









var routes = [
    {
        path: '',
        component: _components_layouts_homelayout_component__WEBPACK_IMPORTED_MODULE_7__["HomelayoutComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }
        ]
    },
    {
        path: '',
        component: _components_layouts_loginlayout_component__WEBPACK_IMPORTED_MODULE_8__["LoginlayoutComponent"],
        children: [
            { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
            { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n<app-loading></app-loading>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _core_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/alert */ "./src/app/core/alert/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/loading/loading.component */ "./src/app/core/loading/loading.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_layouts_homelayout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/layouts/homelayout.component */ "./src/app/components/layouts/homelayout.component.ts");
/* harmony import */ var _components_layouts_loginlayout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/layouts/loginlayout.component */ "./src/app/components/layouts/loginlayout.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _core_alert__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _core_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _components_layouts_homelayout_component__WEBPACK_IMPORTED_MODULE_18__["HomelayoutComponent"],
                _components_layouts_loginlayout_component__WEBPACK_IMPORTED_MODULE_19__["LoginlayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                    closeButton: true,
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                // MATERIAL
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["BsDropdownModule"].forRoot()
            ],
            providers: [],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"text-center\"><h3>Welcome: {{ currentUser?.name }}</h3></div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/jwt.service */ "./src/app/core/jwt.service.ts");
/* harmony import */ var _header_header_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../header/header.model */ "./src/app/components/header/header.model.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(jwtService) {
        this.jwtService = jwtService;
        this.currentUser = new _header_header_model__WEBPACK_IMPORTED_MODULE_3__["currentUser"];
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row-fluid\">\n  <div class=\"example-button-row\">\n    <button mat-button color=\"primary\" routerLink=\"['/dashboard']\">\n      <mat-icon>home</mat-icon> Dashboard\n    </button>\n    \n    <div class=\"btn-group float-right\" dropdown>\n      <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-default dropdown-toggle\" aria-controls=\"dropdown-basic\">\n        {{ currentUser?.name }} <span class=\"caret\"></span>\n      </button>\n      <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\n          role=\"menu\" aria-labelledby=\"button-basic\">\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Setting</a></li>\n        <li class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" (click)=\"logout()\"><mat-icon>logout</mat-icon> Logout</li>\n      </ul>\n    </div>\n    \n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/jwt.service */ "./src/app/core/jwt.service.ts");
/* harmony import */ var _core_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/alert/alert.service */ "./src/app/core/alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.model */ "./src/app/components/header/header.model.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, jwtService, alertService) {
        this.router = router;
        this.jwtService = jwtService;
        this.alertService = alertService;
        this.currentUser = new _header_model__WEBPACK_IMPORTED_MODULE_5__["currentUser"];
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.alertService.success('You have logged out successfully.');
        this.router.navigate(['/signin']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"],
            _core_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.model.ts":
/*!***************************************************!*\
  !*** ./src/app/components/header/header.model.ts ***!
  \***************************************************/
/*! exports provided: currentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
var currentUser = /** @class */ (function () {
    function currentUser() {
    }
    return currentUser;
}());



/***/ }),

/***/ "./src/app/components/layouts/homelayout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/layouts/homelayout.component.ts ***!
  \************************************************************/
/*! exports provided: HomelayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomelayoutComponent", function() { return HomelayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomelayoutComponent = /** @class */ (function () {
    function HomelayoutComponent() {
    }
    HomelayoutComponent.prototype.ngOnInit = function () {
    };
    HomelayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homelayout',
            template: "\n    <app-header></app-header> \n    <router-outlet></router-outlet>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomelayoutComponent);
    return HomelayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/loginlayout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/layouts/loginlayout.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginlayoutComponent", function() { return LoginlayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginlayoutComponent = /** @class */ (function () {
    function LoginlayoutComponent() {
    }
    LoginlayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginlayout',
            template: "<router-outlet></router-outlet>"
        })
    ], LoginlayoutComponent);
    return LoginlayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-3\"></div>\n    \n    <div class=\"col-6\">\n      <br>\n      <br>\n      <h2 class=\"section-title text-center\">Signin With a Exist Account</h2>\n      <br>\n      <app-alert></app-alert>\n      <form [formGroup]=\"userDetails\" (ngSubmit)=\"doSignin(userDetails.value)\">\n\n        <mat-form-field class=\"full-width\"> <!-- EMAIL -->\n          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\n          <mat-error *ngFor=\"let validation of validation_messages.email\">\n            <mat-error class=\"error-message\" *ngIf=\"userDetails.get('email').hasError(validation.type) && (userDetails.get('email').dirty || userDetails.get('email').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\"> <!-- PASSWORD -->\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n          <mat-error *ngFor=\"let validation of validation_messages.password\">\n            <mat-error class=\"error-message\" *ngIf=\"userDetails.get('password').hasError(validation.type) && (userDetails.get('password').dirty || userDetails.get('password').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n        </mat-form-field>\n        \n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!userDetails.valid\">Signin</button>&nbsp;&nbsp;&nbsp; <a [routerLink]=\"['/signup']\">Create an account!</a>\n\n      </form>\n    </div>\n\n    <div class=\"col-3\"></div>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.service */ "./src/app/components/signin/signin.service.ts");
/* harmony import */ var _core_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/jwt.service */ "./src/app/core/jwt.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/alert/alert.service */ "./src/app/core/alert/alert.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, signinService, toastr, router, jwtService, alertService, spinner) {
        this.fb = fb;
        this.signinService = signinService;
        this.toastr = toastr;
        this.router = router;
        this.jwtService = jwtService;
        this.alertService = alertService;
        this.spinner = spinner;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' }
            ]
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    SigninComponent.prototype.createForms = function () {
        // user details form validations
        this.userDetails = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ;
    SigninComponent.prototype.doSignin = function (value) {
        var _this = this;
        this.alertService.clear();
        this.signinService.doSignin(value).subscribe(function (data) {
            if (data.status == 200) {
                _this.toastr.success(data.message, 'Success');
                _this.jwtService.saveToken(data.token);
                var userDetails = {
                    id: data.data._id,
                    name: data.data.fullname,
                    email: data.data.email,
                    username: data.data.username
                };
                _this.jwtService.saveCurrentUser(JSON.stringify(userDetails));
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.alertService.error(data.message);
            }
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _signin_service__WEBPACK_IMPORTED_MODULE_3__["SigninService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"],
            _core_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/signin/signin.service.ts ***!
  \*****************************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




var SigninService = /** @class */ (function () {
    function SigninService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    SigninService.prototype.doSignin = function (param) {
        var apiURL = this.baseUrl + "users/doSignin";
        return this.http.post(apiURL, param);
    };
    SigninService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-3\"></div>\n      \n      <div class=\"col-6\">\n        <br>\n        <br>\n        <h2 class=\"section-title text-center\">Create a New Account</h2>\n        <br>\n        <app-alert></app-alert>\n        <form [formGroup]=\"userDetails\" (ngSubmit)=\"doSignup(userDetails.value)\">\n          <mat-form-field class=\"full-width\"> <!-- FULL NAME -->\n            <input matInput placeholder=\"Full Name\" formControlName=\"fullname\" required>\n            <mat-error *ngFor=\"let validation of validation_messages.fullname\">\n              <mat-error class=\"error-message\" *ngIf=\"userDetails.get('fullname').hasError(validation.type) && (userDetails.get('fullname').dirty || userDetails.get('fullname').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n          \n          <mat-form-field class=\"full-width\"> <!-- USERNAME -->\n            <input matInput maxlength=\"25\" placeholder=\"Username\" formControlName=\"username\" required>\n            <mat-error *ngFor=\"let validation of validation_messages.username\">\n              <mat-error class=\"error-message\" *ngIf=\"userDetails.get('username').hasError(validation.type) && (userDetails.get('username').dirty || userDetails.get('username').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n          \n          <mat-form-field class=\"full-width\"> <!-- EMAIL -->\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\n            <mat-error *ngFor=\"let validation of validation_messages.email\">\n              <mat-error class=\"error-message\" *ngIf=\"userDetails.get('email').hasError(validation.type) && (userDetails.get('email').dirty || userDetails.get('email').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n\n          <div formGroupName=\"matching_passwords\"> <!-- PASSWORD -->\n            <mat-form-field class=\"full-width\">\n              <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n              <mat-error *ngFor=\"let validation of validation_messages.password\">\n                <mat-error class=\"error-message\" *ngIf=\"userDetails.get('matching_passwords').get('password').hasError(validation.type) && (userDetails.get('matching_passwords').get('password').dirty || userDetails.get('matching_passwords').get('password').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n  \n            <mat-form-field class=\"full-width\">\n              <input matInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\"  [errorStateMatcher]=\"parentErrorStateMatcher\" required>\n              <mat-error *ngFor=\"let validation of validation_messages.confirm_password\">\n                <mat-error class=\"error-message\" *ngIf=\"(userDetails.get('matching_passwords').get('confirm_password').hasError(validation.type)|| userDetails.get('matching_passwords').hasError(validation.type)) && (userDetails.get('matching_passwords').get('confirm_password').dirty || userDetails.get('matching_passwords').get('confirm_password').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <mat-checkbox formControlName=\"terms\"> <!-- TERMS & CONDITIONS -->\n            I accept terms and conditions\n          </mat-checkbox>\n          <mat-error *ngFor=\"let validation of validation_messages.terms\">\n            <mat-error class=\"error-message\" *ngIf=\"userDetails.get('terms').hasError(validation.type) && (userDetails.get('terms').dirty || userDetails.get('terms').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n          \n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!userDetails.valid\">Primary</button> &nbsp;&nbsp;&nbsp; <a [routerLink]=\"['/signin']\">Already have a membership!</a>\n  \n        </form>\n      </div>\n\n      <div class=\"col-3\"></div>\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_validaters_username_validaters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/validaters/username.validaters */ "./src/app/core/validaters/username.validaters.ts");
/* harmony import */ var _core_validaters_password_validater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/validaters/password.validater */ "./src/app/core/validaters/password.validater.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.service */ "./src/app/components/signup/signup.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/alert/alert.service */ "./src/app/core/alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, signupService, toastr, router, alertService) {
        this.fb = fb;
        this.signupService = signupService;
        this.toastr = toastr;
        this.router = router;
        this.alertService = alertService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.validation_messages = {
            'fullname': [{ type: 'required', message: 'Full name is required' }],
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters' },
                { type: 'validUsername', message: 'Your username has already been taken' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions' }
            ]
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    SignupComponent.prototype.createForms = function () {
        // matching passwords validation
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, function (formGroup) {
            return _core_validaters_password_validater__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].areEqual(formGroup);
        });
        // user details form validations
        this.userDetails = this.fb.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _core_validaters_username_validaters__WEBPACK_IMPORTED_MODULE_3__["UsernameValidator"].validUsername,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'))
        });
    };
    ;
    SignupComponent.prototype.doSignup = function (value) {
        var _this = this;
        this.signupService.doSignup(value).subscribe(function (data) {
            if (data.status == 200) {
                _this.toastr.success(data.message, 'Success');
                _this.router.navigate(['/signin']);
            }
            else {
                _this.alertService.error(data.message);
            }
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _core_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/signup/signup.service.ts ***!
  \*****************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_save_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../..//core/save.service */ "./src/app/core/save.service.ts");






var SignupService = /** @class */ (function () {
    function SignupService(http, saveService) {
        this.http = http;
        this.saveService = saveService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    SignupService.prototype.doSignup = function (param) {
        return this.saveService.post('users/doSignup', param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    SignupService.prototype.getUsername = function (username) {
        var apiURL = this.baseUrl + "users/getUsername/" + username;
        return this.http.get(apiURL);
    };
    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_save_service__WEBPACK_IMPORTED_MODULE_5__["SaveService"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/core/alert/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/alert/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n    {{alert.message}}\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>"

/***/ }),

/***/ "./src/app/core/alert/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/alert/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "./src/app/core/alert/alert.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/app/core/alert/alert.service.ts");




var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success:
                return 'alert alert-success';
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error:
                return 'alert alert-danger';
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info:
                return 'alert alert-info';
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/core/alert/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/core/alert/alert.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/alert/alert.model.ts ***!
  \*******************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/core/alert/alert.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/alert/alert.service.ts ***!
  \*********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.model */ "./src/app/core/alert/alert.model.ts");





var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single location change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warning = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        this.subject.next();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/core/alert/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/alert/index.ts ***!
  \*************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/core/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(jwtService, router) {
        this.jwtService = jwtService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.jwtService.getToken()) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/jwt.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/jwt.service.ts ***!
  \*************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.saveToken = function (token) {
        window.localStorage.setItem('jwtToken', token);
    };
    JwtService.prototype.getToken = function () {
        return window.localStorage.getItem('jwtToken');
    };
    JwtService.prototype.saveCurrentUser = function (userDetails) {
        window.localStorage.setItem('currentUser', userDetails);
    };
    JwtService.prototype.getCurrentUser = function () {
        return window.localStorage.getItem('currentUser');
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('currentUser');
    };
    JwtService.prototype.saveUsername = function (username) {
        localStorage.setItem('username', username);
    };
    JwtService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/loading/loading.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/loading/loading.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/loading/loading.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/loading/loading.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdOpacity = 1\n  bdColor = \"rgba(186,186,186,0.42)\"\n  size = \"medium\"\n  color = \"#676767\"\n  type = \"square-jelly-box\"\n  [fullScreen] = \"true\"\n>\n  <p style=\"color: white\" > Loading... </p>\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/core/loading/loading.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/loading/loading.component.ts ***!
  \***************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/core/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/core/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/save.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/save.service.ts ***!
  \**************************************/
/*! exports provided: SaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveService", function() { return SaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SaveService = /** @class */ (function () {
    function SaveService(httpClient) {
        this.httpClient = httpClient;
        this.apiBase = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    SaveService.prototype.post = function (url, param) {
        var apiURL = this.apiBase + url;
        return this.httpClient.post(apiURL, param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    SaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SaveService);
    return SaveService;
}());



/***/ }),

/***/ "./src/app/core/validaters/password.validater.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/validaters/password.validater.ts ***!
  \*******************************************************/
/*! exports provided: ParentErrorStateMatcher, PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentErrorStateMatcher", function() { return ParentErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
var ParentErrorStateMatcher = /** @class */ (function () {
    function ParentErrorStateMatcher() {
    }
    ParentErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = !!(form && form.submitted);
        var controlTouched = !!(control && (control.dirty || control.touched));
        var controlInvalid = !!(control && control.invalid);
        var parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));
        return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
    };
    return ParentErrorStateMatcher;
}());

var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var value;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (value === undefined) {
                    value = control.value;
                }
                else {
                    if (value !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());



/***/ }),

/***/ "./src/app/core/validaters/username.validaters.ts":
/*!********************************************************!*\
  !*** ./src/app/core/validaters/username.validaters.ts ***!
  \********************************************************/
/*! exports provided: UsernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return {
                validUsername: true
            };
        }
        else {
            return null;
        }
    };
    return UsernameValidator;
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
    baseUrl: 'http://182.70.249.165:3000/'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/admin1/projects/jwtAngular/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map