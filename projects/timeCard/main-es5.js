(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-card>\n  <mat-card-title align=\"center\">\n    Timers App\n  </mat-card-title>\n  <mat-card-header>\n    <button mat-button matSuffix mat-icon-button (click)=\"addTimer()\">\n      <mat-icon>add_circle_outline</mat-icon>\n    </button>\n    <button mat-button matSuffix mat-icon-button (click)=\"saveCsv()\">\n      <mat-icon>save</mat-icon>\n    </button>\n\n  </mat-card-header>\n\n  <mat-card-content>\n      <li *ngFor=\"let timerId of timerIds\">\n        <app-named-timer\n          (removeTimerEvent)=\"removeTimer($event)\"\n          [timerId]=\"timerId\">\n        </app-named-timer>\n      </li>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/named-timer/named-timer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/named-timer/named-timer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [ngClass]=\"isRunning() ? 'red-card' : 'green-card'\">\n<div>\n  <button mat-button matSuffix mat-icon-button right (click)=\"removeMe()\">\n    <mat-icon>remove_circle_outline</mat-icon>\n  </button>\n\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <mat-label class=\"time\" [textContent]=\"timeString\"></mat-label>\n\n  <button mat-button matSuffix mat-icon-button (click)=\"pausePlay()\">\n    <mat-icon>{{playButtonIcon}}</mat-icon>\n  </button>\n  <button mat-button matSuffix mat-icon-button (click)=\"reset()\">\n    <mat-icon>replay</mat-icon>\n  </button>\n</div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none;\n}\n\n.main-app-header {\n  background-color: aqua;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubWFpbi1hcHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbiJdfQ== */"

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


//import {writeFile} from 'fs';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Time Card';
        this.lastTimerNumber = 0;
        this.timerIds = new Set();
    }
    AppComponent.prototype.addTimer = function () {
        this.lastTimerNumber += 1;
        this.timerIds.add(this.lastTimerNumber);
    };
    AppComponent.prototype.removeTimer = function (timerId) {
        this.timerIds.delete(timerId);
    };
    AppComponent.prototype.saveCsv = function () {
        console.log('request to write file received');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "title", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _named_timer_named_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./named-timer/named-timer.component */ "./src/app/named-timer/named-timer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _named_timer_named_timer_component__WEBPACK_IMPORTED_MODULE_5__["NamedTimerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/named-timer/named-timer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/named-timer/named-timer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red-card {background-color: #94d3d6}\n.green-card {background-color: #d6a59f}\n.example-form-field {\n  width: 200px;\n}\n.time {\n  font-size: 30px;\n}\n.mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\n.vertically-centered {\n  padding-bottom: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZWQtdGltZXIvbmFtZWQtdGltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHlCQUF5QjtBQUNwQyxhQUFhLHlCQUF5QjtBQUV0QztFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9uYW1lZC10aW1lci9uYW1lZC10aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZC1jYXJkIHtiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkM2Q2fVxuLmdyZWVuLWNhcmQge2JhY2tncm91bmQtY29sb3I6ICNkNmE1OWZ9XG5cbi5leGFtcGxlLWZvcm0tZmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnZlcnRpY2FsbHktY2VudGVyZWQge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/named-timer/named-timer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/named-timer/named-timer.component.ts ***!
  \******************************************************/
/*! exports provided: NamedTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedTimerComponent", function() { return NamedTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./named-timer.state-enum */ "./src/app/named-timer/named-timer.state-enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var NamedTimerComponent = /** @class */ (function () {
    function NamedTimerComponent() {
        this.removeTimerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.name = 'timer';
        this.timeString = '00:00:00';
        this.totalTime = 0;
        this.lastSampleTime = 0;
        this.state = _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__["State"].Paused;
        this.playButtonIcon = 'play_circle_outline';
        this.options = ['ESP-', 'Environmental', 'Training', 'Meeting'];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
    }
    NamedTimerComponent.prototype.removeMe = function () {
        this.removeTimerEvent.emit(this.id);
    };
    NamedTimerComponent.prototype.isRunning = function () {
        return this.state === _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__["State"].Playing;
    };
    NamedTimerComponent.prototype.reset = function () {
        this.totalTime = 0;
        this.buildTimeString();
    };
    NamedTimerComponent.prototype.update = function () {
        var now = Date.now();
        var timeDiff = now - this.lastSampleTime;
        this.lastSampleTime = now;
        if (this.state === _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__["State"].Playing) {
            this.totalTime += timeDiff;
            this.buildTimeString();
        }
    };
    NamedTimerComponent.prototype.buildTimeString = function () {
        var date = new Date(0, 0, 0, 0, 0, 0, this.totalTime);
        var seperator = ':';
        this.timeString =
            this.formatTime(date.getHours()) + seperator +
                this.formatTime(date.getMinutes()) + seperator +
                this.formatTime(date.getSeconds());
    };
    NamedTimerComponent.prototype.formatTime = function (time) {
        if (time > 9) {
            return '' + time;
        }
        else {
            return '0' + time;
        }
    };
    NamedTimerComponent.prototype.pausePlay = function () {
        if (this.state === _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__["State"].Paused) {
            this.state = _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__["State"].Playing;
            this.playButtonIcon = 'pause_circle_outline';
        }
        else {
            this.state = _named_timer_state_enum__WEBPACK_IMPORTED_MODULE_2__["State"].Paused;
            this.playButtonIcon = 'play_circle_outline';
        }
    };
    NamedTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = 'timer' + this.id;
        this.update();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 50).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(Infinity))
            .subscribe(function (next) { return _this.update(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('timerId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NamedTimerComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('removeTimerEvent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NamedTimerComponent.prototype, "removeTimerEvent", void 0);
    NamedTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-named-timer',
            template: __webpack_require__(/*! raw-loader!./named-timer.component.html */ "./node_modules/raw-loader/index.js!./src/app/named-timer/named-timer.component.html"),
            styles: [__webpack_require__(/*! ./named-timer.component.css */ "./src/app/named-timer/named-timer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NamedTimerComponent);
    return NamedTimerComponent;
}());



/***/ }),

/***/ "./src/app/named-timer/named-timer.state-enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/named-timer/named-timer.state-enum.ts ***!
  \*******************************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State;
(function (State) {
    State[State["Playing"] = 0] = "Playing";
    State[State["Paused"] = 1] = "Paused";
})(State || (State = {}));


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
    production: false
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

module.exports = __webpack_require__(/*! /Users/michael/Desktop/SOURCES/timeCard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map