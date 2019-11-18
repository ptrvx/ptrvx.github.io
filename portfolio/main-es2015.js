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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n    <div class=\"aree\">\n        <footer>\n\n            <a href='https://t.me/ptrvx'>\n                <fa-icon [icon]=\"telegram\" size='lg'></fa-icon>\n            </a>\n\n            <a href='https://www.linkedin.com/in/petar-vukovic-3934b1196/'>\n                <fa-icon [icon]='linkedin' size='lg'></fa-icon>\n            </a>\n\n            <a href='https://join.skype.com/invite/odqtn2nh9hQd'>\n                <fa-icon [icon]='skype' size='lg'></fa-icon>\n            </a>\n\n            <a href='https://instagram.com/ptrvx'>\n                <fa-icon [icon]='instagram' size='lg'></fa-icon>\n            </a>\n\n            <a href='https://github.com/ptrvx'>\n                <fa-icon [icon]='git' size='lg'></fa-icon>\n            </a>\n\n            <a href='https://playoverwatch.com/en-gb/career/pc/Ratep-2260'>\n                <fa-icon [icon]='battlenet' size='lg'></fa-icon>\n            </a>\n\n        </footer>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='menu'>\n\n    <div class=\"area\">\n        <nav>\n            <a mat-button routerLink='/' routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\">\n                Home\n            </a>\n\n            <a mat-button routerLink='/contact' routerLinkActive='active'>\n                Contact\n            </a>\n\n            <a mat-button routerLink='/news' routerLinkActive='active'>\n                News\n            </a>\n        </nav>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"area\">\n    <form class=\"inputForm\" [formGroup]='contactForm' (ngSubmit)='submitForm()'>\n        <mat-form-field>\n            <input matInput placeholder='Ime' type='text' name='firstName' formControlName='firstName'>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder='Prezime' type='text' name='lastName' formControlName='lastName'>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder='Email' type='mail' name='email' formControlName='email' required>\n        </mat-form-field>\n\n        <mat-form-field>\n            <textarea matInput placeholder='Vaša poruka' name='text' formControlName='text' required></textarea>\n        </mat-form-field>\n\n        <button mat-button value='Submit' type='submit' [disabled]='!contactForm.valid'>Send</button>\n\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"area\">\n\n    <div class=\"cv\">\n\n        <h1>Education</h1>\n\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Computer Engineering\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        2016\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                School of Computing, Union University Belgrade\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Mathematics\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        2016\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                Faculty of Mathematics, University of Belgrade\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        High School\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        2012\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                Mathmatical Grammar School\n            </mat-expansion-panel>\n\n        </mat-accordion>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\">\n    <div class=\"area\">\n        <div class=\"news\">\n\n            <mat-card *ngFor='let article of news;' class='article'>\n                <mat-card-title>\n                    {{ article.title }}\n                </mat-card-title>\n                <mat-card-subtitle>\n                    {{ article.source.name }}\n                </mat-card-subtitle>\n                <img mat-card-image src='{{ article.urlToImage }} ' />\n                <mat-card-content>\n                    {{ article.description }}\n                </mat-card-content>\n                <mat-card-actions>\n                    <button mat-button class='action' (click)=\"like(article.url)\">\n                        <span *ngIf='article.liked; else elseBlock' class=\"like\">\n                            <fa-icon [icon]=\"fasHeart\"></fa-icon> Like\n                        </span>\n                        <ng-template #elseBlock>\n                            <span>\n                            <fa-icon [icon]='farHeart'></fa-icon> Like</span>\n                        </ng-template>\n\n                    </button>\n                    <a href='{{ article.url }}' target=\"_blank\" mat-button class='action'>\n                        <fa-icon [icon]=\"faLink\"></fa-icon>\n                        Read Story\n                    </a>\n                </mat-card-actions>\n            </mat-card>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/news/news.component */ "./src/app/modules/news/news.component.ts");
/* harmony import */ var _modules_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact/contact.component */ "./src/app/modules/contact/contact.component.ts");






const routes = [
    {
        path: '',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'news',
        component: _modules_news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]
    },
    {
        path: 'contact',
        component: _modules_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/news/news.component */ "./src/app/modules/news/news.component.ts");
/* harmony import */ var _modules_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/contact/contact.component */ "./src/app/modules/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _modules_news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
            _modules_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background: rgba(26, 26, 27, 0.87);\n  color: white;\n  padding: 15px;\n}\n\nfooter {\n  display: flex;\n  max-width: 640px;\n  margin: 0 auto;\n  min-height: 11vh;\n}\n\nfooter .mat-button {\n  font-size: 24px;\n  padding: 10px 20px;\n}\n\nfooter a {\n  color: white;\n  padding: 10px;\n}\n\n.area {\n  max-width: 1640px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcUGV0YXIgVnVrb3ZpY1xcRG9jdW1lbnRzXFxyYWZcXE5hcHJlZG5vIEphdmEgUHJvZ3JhbWlyYW5qZVxcSG9tZXdvcmtcXHBvcnRmb2xpby9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBWUEsZ0JBQUE7QUNYRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBSjs7QURNQTtFQUNFLGlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNiwgMjYsIDI3LCAwLjg3KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAubWF0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBtaW4taGVpZ2h0OiAxMXZoO1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbiAgbWF4LXdpZHRoOiAxNjQwcHg7XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjYsIDI2LCAyNywgMC44Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDExdmg7XG59XG5mb290ZXIgLm1hdC1idXR0b24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYXJlYSB7XG4gIG1heC13aWR0aDogMTY0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");



let FooterComponent = class FooterComponent {
    constructor() {
        this.facebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebook"];
        this.linkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.battlenet = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBattleNet"];
        this.telegram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTelegram"];
        this.instagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInstagram"];
        this.git = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGit"];
        this.skype = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSkype"];
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  background: rgba(26, 26, 27, 0.87);\n  color: white;\n}\n\nnav {\n  display: flex;\n  max-width: 640px;\n  margin: 0 auto;\n}\n\nnav .active {\n  color: #f83535;\n  border-bottom: 5px solid red;\n  border-radius: 0px;\n}\n\nnav .mat-button {\n  font-size: 24px;\n  padding: 10px 20px;\n}\n\n.area {\n  max-width: 1640px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXFBldGFyIFZ1a292aWNcXERvY3VtZW50c1xccmFmXFxOYXByZWRubyBKYXZhIFByb2dyYW1pcmFuamVcXEhvbWV3b3JrXFxwb3J0Zm9saW8vc3JjXFxhcHBcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBREdFO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1BO0VBQ0UsaUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAyNiwgMjcsIDAuODcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCA1MywgNTMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5hcmVhIHtcclxuICBtYXgtd2lkdGg6IDE2NDBweDtcclxufVxyXG4iLCIubWVudSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjYsIDI2LCAyNywgMC44Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5uYXYgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZjgzNTM1O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5uYXYgLm1hdC1idXR0b24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmFyZWEge1xuICBtYXgtd2lkdGg6IDE2NDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/modules/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/contact/contact.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputForm {\n  display: flex;\n  flex-direction: column;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.area {\n  max-width: 1640px;\n  min-height: 70vh;\n  padding-bottom: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWN0L0M6XFxVc2Vyc1xcUGV0YXIgVnVrb3ZpY1xcRG9jdW1lbnRzXFxyYWZcXE5hcHJlZG5vIEphdmEgUHJvZ3JhbWlyYW5qZVxcSG9tZXdvcmtcXHBvcnRmb2xpby9zcmNcXGFwcFxcbW9kdWxlc1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Rm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbiAgbWF4LXdpZHRoOiAxNjQwcHg7XHJcbiAgbWluLWhlaWdodDogNzB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcclxufVxyXG4iLCIuaW5wdXRGb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hcmVhIHtcbiAgbWF4LXdpZHRoOiAxNjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor(fb) {
        this.fb = fb;
        this.contactForm = this.fb.group({
            'firstName': '',
            'lastName': '',
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'text': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    submitForm() {
        const data = this.contactForm.value;
        console.log(data);
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/modules/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cv {\n  display: flex;\n  flex-direction: column;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.area {\n  max-width: 1640px;\n  min-height: 70vh;\n  padding-bottom: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFxVc2Vyc1xcUGV0YXIgVnVrb3ZpY1xcRG9jdW1lbnRzXFxyYWZcXE5hcHJlZG5vIEphdmEgUHJvZ3JhbWlyYW5qZVxcSG9tZXdvcmtcXHBvcnRmb2xpby9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIG1heC13aWR0aDogNjQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxuICBtYXgtd2lkdGg6IDE2NDBweDtcclxuICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG59XHJcbiIsIi5jdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYXJlYSB7XG4gIG1heC13aWR0aDogMTY0MHB4O1xuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/news/news.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/news/news.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".news {\n  display: flex;\n  flex-direction: column;\n  max-width: 640px;\n  margin: 0 auto;\n}\n\n.area {\n  max-width: 1640px;\n  min-height: 70vh;\n  padding-bottom: 10vh;\n}\n\n.article {\n  color: inherit;\n  background: rgba(26, 26, 27, 0.8);\n  margin: 15px;\n  border: 1px solid #343536;\n}\n\n.article:hover {\n  border: 1px solid white;\n}\n\n.article mat-card-subtitle {\n  color: red;\n}\n\n.article mat-card-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  color: #818384;\n}\n\n.article .like {\n  color: red;\n}\n\n.page {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXdzL0M6XFxVc2Vyc1xcUGV0YXIgVnVrb3ZpY1xcRG9jdW1lbnRzXFxyYWZcXE5hcHJlZG5vIEphdmEgUHJvZ3JhbWlyYW5qZVxcSG9tZXdvcmtcXHBvcnRmb2xpby9zcmNcXGFwcFxcbW9kdWxlc1xcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0FDREo7O0FESUk7RUFDSSx1QkFBQTtBQ0ZSOztBREtJO0VBQ0ksVUFBQTtBQ0hSOztBRE1JO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE9JO0VBQ0ksVUFBQTtBQ0xSOztBRFVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1heC13aWR0aDogNjQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFyZWEge1xyXG4gICAgbWF4LXdpZHRoOiAxNjQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi5hcnRpY2xlIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMjYsIDI3LCAwLjgpO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTIsIDUzLCA1NCk7XHJcbiAgICBcclxuXHJcbiAgICAmOmhvdmVyIHsgICAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTI5LCAxMzEsIDEzMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpa2Uge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIi5uZXdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hcmVhIHtcbiAgbWF4LXdpZHRoOiAxNjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xufVxuXG4uYXJ0aWNsZSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAyNiwgMjcsIDAuOCk7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0MzUzNjtcbn1cbi5hcnRpY2xlOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4uYXJ0aWNsZSBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiByZWQ7XG59XG4uYXJ0aWNsZSBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2xvcjogIzgxODM4NDtcbn1cbi5hcnRpY2xlIC5saWtlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZ2Uge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/news/news.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/news/news.component.ts ***!
  \************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_news_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/news/news.service */ "./src/app/modules/news/news.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");






let NewsComponent = class NewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.keyword = 'programming';
        this.likes = [];
        this.fasHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHeart"];
        this.farHeart = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHeart"];
        this.faLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"];
    }
    ngOnInit() {
        this.getStoredLikes();
        this.showNews();
    }
    showNews() {
        this.newsService.getNews(this.keyword).subscribe((data) => {
            this.news = data['articles'];
            for (let n of this.news) {
                n['liked'] = false;
            }
            this.checkLikes();
        });
    }
    getStoredLikes() {
        this.likes = JSON.parse(localStorage.getItem('likes')) || [];
    }
    storeLikes() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }
    checkLikes() {
        for (let n of this.news) {
            if (this.likes && this.likes.includes(n['url'])) {
                n['liked'] = true;
            }
            else {
                n['liked'] = false;
            }
        }
    }
    like(url) {
        this.getStoredLikes();
        if (this.likes.includes(url)) {
            this.likes = this.likes.filter(a => a != url);
        }
        else {
            this.likes.push(url);
        }
        this.storeLikes();
        this.checkLikes();
    }
};
NewsComponent.ctorParameters = () => [
    { type: src_app_modules_news_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/modules/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/modules/news/news.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/news/news.service.ts ***!
  \**********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
        this.url = 'https://newsapi.org/v2/everything';
        this.param = '?language=en&pageSize=20&page=1&apiKey=';
        this.apiKey = 'a81a15bb0c7a473abe42ee3a69a38314';
        this.qParam = '&q=';
    }
    getNews(keyword) {
        return this.http.get(this.url + this.param + this.apiKey + this.qParam + keyword);
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Petar Vukovic\Documents\raf\Napredno Java Programiranje\Homework\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map